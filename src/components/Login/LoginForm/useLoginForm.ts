import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation/login.validation";
import AuthApi from "apis/Auth.api";
import { useState } from "react";
import { loginType } from "app/features/user/userSlice";
interface IAuthLogin {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthLogin>({
    resolver: yupResolver(loginSchema),
  });

  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  const onSubmit = async (data: IAuthLogin) => {
    try {
      const res = await AuthApi().login(data);
      console.log({ res });
      await localStorage.setItem("USER_Token",res.data.token);
      await dispatch(loginType({ user: res.data }));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    typePasswordInput,
    handleTypeInputPassword,
  };
};

export default useLoginForm;
