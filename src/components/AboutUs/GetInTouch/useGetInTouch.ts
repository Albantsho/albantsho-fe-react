import { yupResolver } from "@hookform/resolvers/yup";
import useContact from "apis/Contact.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { getInTouchSchema } from "./validation/getInTouch.validation";

interface IContactFormValues {
  name: string;
  email: string;
  message: string;
}

const useGetInTouch = () => {
  const { createNewContact } = useContact();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(getInTouchSchema),
  });

  const onSubmit = async (data: IContactFormValues) => {
    try {
      setLoading(true);
      await createNewContact(data);
      reset({ email: "", message: "", name: "" });
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register, handleSubmit, errors, onSubmit };
};

export default useGetInTouch;
