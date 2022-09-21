import { useForm } from "react-hook-form";

interface IAuthLogin {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const { register, handleSubmit } = useForm<IAuthLogin>();

  const onSubmit = (data: IAuthLogin) => {
    console.log(data);
  };

  return { register, onSubmit, handleSubmit };
};

export default useLoginForm;
