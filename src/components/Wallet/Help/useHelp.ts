import useContact from "apis/Contact.api";
import useUserStore from "app/user.store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";

interface IContactFormValues {
  message: string;
}

const useHelp = () => {
  const { createNewContact } = useContact();
  const [loading, setLoading] = useState(false);
  const user = useUserStore((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: IContactFormValues) => {
    try {
      setLoading(true);
      await createNewContact({
        message: data.message,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
      });
      reset({ message: "" });
      toast.success("successfully send message");
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register, handleSubmit, errors, onSubmit };
};

export default useHelp;
