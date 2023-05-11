import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi, { IResetpasswordPayload } from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import routes from "utils/routes";
import errorHandler from "utils/error-handler";
import { resetPasswordSchema } from "./validation/resetPassword.validation";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const queryClient = new QueryClient();

const useResetPasswordForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const { resetPassword } = useAuthApi();
  const { replace, query } = useRouter();
  const { mutate: resetPasswordFu, isLoading: loadingResetPassword } =
    useMutation<void, Error, IResetpasswordPayload>(
      (data) => resetPassword(data),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(["user"]);
          replace(routes.resetPasswordConfirmation.url);
        },
      }
    );

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
    if (typeof query.reset_password_token === "string") {
      resetPasswordFu({
        newPassword: data.password,
        resetPasswordToken: query.reset_password_token,
      });
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    handleTypeInputPassword,
    typePasswordInput,
    loading: loadingResetPassword,
  };
};

export default useResetPasswordForm;
