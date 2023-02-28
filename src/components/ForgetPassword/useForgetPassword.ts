import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { forgetPasswordSchema } from "./validation/forgetPassword.validation";

interface IAuthForgetPassword {
  email: string;
}

const queryClient = new QueryClient();

const useForgetPassword = () => {
  const { resetPasswordEmail } = useAuthApi();
  const { replace } = useRouter();

  const { mutate: forgetPassword, isLoading: loadingForgetPassword } =
    useMutation<void, Error, string>((email) => resetPasswordEmail(email), {
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        replace(routes.checkEmail.url);
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForgetPassword>({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmit = async (data: IAuthForgetPassword) =>
    forgetPassword(data.email);

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    loading: loadingForgetPassword,
  };
};

export default useForgetPassword;
