import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation/login.validation";
import useAuthApi from "apis/Auth.api";
import { useState } from "react";
import { useRouter } from "next/router";
import routes from "routes/routes";
import { useUserStore } from "app/user.store";
import shallow from "zustand/shallow";
interface IAuthLogin {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [typePasswordInput, setTypePasswordInput] = useState(true);
  const { login } = useAuthApi();
  const { push } = useRouter();
  const useUser = () => {
    const { authenticationUser } = useUserStore(
      (store) => ({
        authenticationUser: store.authenticationUser,
      }),
      shallow
    );
    return { authenticationUser };
  };

  const { authenticationUser } = useUser();
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
      const res = await login(data);
      console.log(res);

      await authenticationUser(res.data);
      await push(routes.home);
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
