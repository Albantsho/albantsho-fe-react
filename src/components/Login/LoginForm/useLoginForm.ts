import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi, { type ILoginPayload } from "apis/Auth.api";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import { loginSchema } from "./validation/login.validation";
interface IAuthLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

const queryClient = new QueryClient();

const useLoginForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const { signin } = useAuthApi();
  const { replace } = useRouter();
  const { authenticationUser, setAccessToken } = useUserStore((state) => ({
    authenticationUser: state.authenticationUser,
    setAccessToken: state.setAccessToken,
  }));

  const { mutate: signinUser, isLoading: loadingSigninUser } = useMutation<
    any,
    Error,
    ILoginPayload
  >((user) => signin(user), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data, variables: ILoginPayload) => {
      queryClient.invalidateQueries(["user"]);
      authenticationUser(data.user);
      !data.user && replace(routes.verifyEmail.url);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !data.user && authenticationUser({ email: variables.email } as any);
      setAccessToken(data.accessToken);
      if (data.user && data.user.userType) {
        data.user.userType === "writer"
          ? replace(routes.writerDashboard.url)
          : data.user.userType === "producer"
            ? replace(routes.producerDashboard.url)
            : data.user.userType === "admin"
              ? replace(routes.adminDashboard.url)
              : replace(routes.reviewerDashboard.url);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthLogin>({
    resolver: yupResolver(loginSchema),
  });

  const handleChangeRememberMe = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  const onSubmit = async (data: IAuthLogin) =>
    signinUser({ ...data, rememberMe });

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    typePasswordInput,
    handleTypeInputPassword,
    rememberMe,
    handleChangeRememberMe,
    loading: loadingSigninUser,
  };
};

export default useLoginForm;
