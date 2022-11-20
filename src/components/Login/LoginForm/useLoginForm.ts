import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
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
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc5ZDBmZTMzZWQ0NWRjM2QyMjZiZjgiLCJpYXQiOjE2Njg5Mjc3NjQsImV4cCI6MTY4NjIwNzc2NH0.fnqFc9uEEX-EVBztamaFxeleEPXdNRxldTQPSCoSEJY"
      );
      successHandler(res.message);
      replace(routes.home);
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
