import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { useStore } from "zustand";
import shallow from "zustand/shallow";
import { registerSchema } from "./validation/register.validation";

interface IRegisterFormValues {
  fullname: string;
  email: string;
  password: string;
  country: string;
  user_type: "writer" | "producer";
  portfolio?: string;
  production_company_name?: string;
  gender: "mail" | "female";
}

const useRegisterForm = () => {
  const { signup } = useAuthApi();
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();
  // const useUser = () => {
  //   const { authenticationUser } = useUserStore(
  //     (store) => ({
  //       authenticationUser: store.authenticationUser,
  //     }),
  //     shallow
  //   );
  //   return { authenticationUser };
  // };

  // const { authenticationUser } = useUser();

  const authenticationUser = useUserStore((state) => state.authenticationUser);

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    defaultValues: {
      fullname: "",
      email: "",
      country: "Nigeria",
      password: "",
      user_type: "writer",
      gender: "female",
    },
    resolver: yupResolver(registerSchema),
  });
  const roleValue = watch("user_type");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] =
    useState<boolean>(false);
  const [typePasswordInput, setTypePasswordInput] = useState(true);

  const onSubmit = async (data: IRegisterFormValues) => {
    try {
      console.log(data);

      setLoading(true);
      const res = await signup(data);
      console.log(res);
      authenticationUser(res.data.user);
      // replace(routes.welcome);
      replace(routes.verifyEmail);
    } catch (error) {
      console.log(error);

      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const HandleAcceptTermsAndCondition = () => {
    setAcceptTermsAndCondition((prevState) => !prevState);
  };
  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  return {
    register,
    control,
    onSubmit,
    handleSubmit,
    roleValue,
    acceptTermsAndCondition,
    HandleAcceptTermsAndCondition,
    typePasswordInput,
    handleTypeInputPassword,
    errors,
    loading,
  };
};

export default useRegisterForm;
