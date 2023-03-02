import { yupResolver } from "@hookform/resolvers/yup";
import useContact from "apis/Contact.api";
import { IResData } from "interfaces/response";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { getInTouchSchema } from "./validation/getInTouch.validation";

interface IContactFormValues {
  name: string;
  email: string;
  message: string;
}

const queryClient = new QueryClient();

const useGetInTouch = () => {
  const { createNewContact } = useContact();

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

  const { mutate: createNewContactMutate, isLoading: loadingCreateNewContact } =
    useMutation<IResData<object>, Error, IContactFormValues>({
      mutationFn: (data) => createNewContact(data),
      onSuccess: (data) => {
        queryClient.invalidateQueries("contact");
        successHandler(data.message);
        reset({ email: "", message: "", name: "" });
      },
      onError: (error) => errorHandler(error),
    });

  const onSubmit = async (data: IContactFormValues) =>
    createNewContactMutate(data);

  return {
    loading: loadingCreateNewContact,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useGetInTouch;
