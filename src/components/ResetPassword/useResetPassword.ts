import { useForm } from "react-hook-form";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const useResetPassword = () => {
  const { register, handleSubmit } = useForm<IAuthResetPassword>();

  const onSubmit = (data: IAuthResetPassword) => {
    console.log(data);
  };

  return { register, onSubmit, handleSubmit };
};

export default useResetPassword;
