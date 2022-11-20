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
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      // const res = await resetPassword({ newPassword: data.password });
      // successHandler(res.message);
      replace("/login");
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    handleTypeInputPassword,
    typePasswordInput,
    loading,
  };
};

export default useResetPasswordForm;
