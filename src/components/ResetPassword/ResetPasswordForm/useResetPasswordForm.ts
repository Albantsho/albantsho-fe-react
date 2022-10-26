import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { resetPasswordSchema } from "./validation/resetPassword.validation";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const useResetPasswordForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const { resetPassword } = useAuthApi();
  const { replace } = useRouter();
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

  const onSubmit = async (data: IAuthResetPassword) => {
    try {
      const res = await resetPassword({ password: data.password });
      successHandler(res.message);
      replace("/login");
    } catch (error) {
      errorHandler(error);
    }
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
