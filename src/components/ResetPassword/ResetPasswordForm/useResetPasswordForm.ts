import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { resetPasswordSchema } from "./validation/resetPassword.validation";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const useResetPasswordForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuthApi();
  const { replace, query } = useRouter();
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
      if (typeof query.reset_password_token === "string") {
        setLoading(true);
        await resetPassword({
          newPassword: data.password,
          resetPasswordToken: query.reset_password_token,
        });
        replace(routes.signin.url);
      }
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
