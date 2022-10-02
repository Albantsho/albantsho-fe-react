import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./login.validation";
import AuthApi from "apis/Auth.api";
import { useState } from "react";
interface IAuthLogin {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthLogin>({
    resolver: yupResolver(loginSchema),
  });

  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  const onSubmit = (data: IAuthLogin) => {
    AuthApi().login(data);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    typePasswordInput,
    handleTypeInputPassword,
  };
};

export default useLoginForm;
