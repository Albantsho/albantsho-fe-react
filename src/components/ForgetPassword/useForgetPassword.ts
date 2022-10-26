import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { forgetPasswordSchema } from "./validation/forgetPassword.validation";

interface IAuthForgetPassword {
  email: string;
}

const useForgetPassword = () => {
  const { forgetPassword } = useAuthApi();
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
      const res = await forgetPassword(data);
      successHandler(res.message);
      replace("/reset-password");
    } catch (error) {
      errorHandler(error);
    }
  };

  return { register, onSubmit, handleSubmit, errors };
};

export default useForgetPassword;
