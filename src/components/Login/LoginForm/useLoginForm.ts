import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import { loginSchema } from "./validation/login.validation";
interface IAuthLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

const useLoginForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const { signin } = useAuthApi();
  const { replace } = useRouter();
  const { authenticationUser, setAccessToken } = useUserStore((state) => ({
    authenticationUser: state.authenticationUser,
    setAccessToken: state.setAccessToken,
  }));
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

  const onSubmit = async (data: IAuthLogin) => {
    try {
      setLoading(true);
      const res = await signin({ ...data, rememberMe });
      authenticationUser(res.data.user);
      !res.data.user && replace(routes.verifyEmail.url);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !res.data.user && authenticationUser({ email: data.email } as any);
      setAccessToken(res.data.accessToken);
      if (res.data.user && res.data.user.userType) {
        res.data.user.userType === "writer"
          ? replace(routes.writerDashboard.url)
          : res.data.user.userType === "producer"
          ? replace(routes.producerDashboard.url)
          : res.data.user.userType === "admin"
          ? replace(routes.adminDashboard.url)
          : replace(routes.reviewerDashboard.url);
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
    typePasswordInput,
    handleTypeInputPassword,
    rememberMe,
    handleChangeRememberMe,
    loading,
  };
};

export default useLoginForm;
