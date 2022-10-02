import AuthApi from "apis/Auth.api";
import { useState } from "react";
import { resetPasswordSchema } from "./validation/resetPassword.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const useResetPasswordForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  const onSubmit = (data: IAuthResetPassword) => {
    AuthApi().resetPassword({ password: data.password });
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    handleTypeInputPassword,
    typePasswordInput,
  };
};

export default useResetPasswordForm;
