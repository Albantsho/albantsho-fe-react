import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { forgetPasswordSchema } from "./validation/forgetPassword.validation";

interface IAuthForgetPassword {
  email: string;
}

const useForgetPassword = () => {
  const { resetPasswordEmail } = useAuthApi();
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForgetPassword>({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmit = async (data: IAuthForgetPassword) => {
    try {
      setLoading(true);
      const res = await resetPasswordEmail(data.email);
      replace(routes.resetPassword.url(res.data.randomString));
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { register, onSubmit, handleSubmit, errors, loading };
};

export default useForgetPassword;
