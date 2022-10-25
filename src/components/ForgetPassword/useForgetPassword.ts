import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useForm } from "react-hook-form";
import { forgetPasswordSchema } from "./validation/forgetPassword.validation";

interface IAuthForgetPassword {
  email: string;
}

const useForgetPassword = () => {
  const { forgetPassword } = useAuthApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForgetPassword>({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmit = async (data: IAuthForgetPassword) => {
    await forgetPassword(data);
  };

  return { register, onSubmit, handleSubmit, errors };
};

export default useForgetPassword;
