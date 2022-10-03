import useAuthApi from "apis/Auth.api";
import { useState } from "react";
import { resetPasswordSchema } from "./validation/resetPassword.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface IAuthResetPassword {
  password: string;
  verify_password: string;
}

const useResetPasswordForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const { resetPassword } = useAuthApi();
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
    const token = localStorage.getItem("USER_Token");
    console.log(token);
    try {
      const res = await resetPassword({ password: data.password });
      console.log(
        "🚀 ~ file: useResetPasswordForm.ts ~ line 32 ~ onSubmit ~ res",
        res
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: useResetPasswordForm.ts ~ line 34 ~ onSubmit ~ error",
        error
      );
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    handleTypeInputPassword,
    typePasswordInput,
  };
};

export default useResetPasswordForm;
