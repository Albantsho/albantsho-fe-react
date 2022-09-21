import { useForm } from "react-hook-form";

interface IAuthForgetPassword {
  email: string;
}

const useForgetPassword = () => {
  const { register, handleSubmit } = useForm<IAuthForgetPassword>();

  const onSubmit = (data: IAuthForgetPassword) => {
    console.log(data);
  };

  return { register, onSubmit, handleSubmit };
};

export default useForgetPassword;
