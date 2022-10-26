import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { useUserStore } from "app/user.store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import shallow from "zustand/shallow";
import { registerSchema } from "./validation/register.validation";

interface IRegisterFormValues {
  full_name: string;
  email: string;
  password: string;
  country: string;
  user_type: "user" | "producer";
  portfolio?: string;
  production_company_name?: string;
}

const useRegisterForm = () => {
  const { register: registerApi } = useAuthApi();
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();
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
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    defaultValues: {
      full_name: "",
      email: "",
      country: "Nigeria",
      password: "",
      portfolio: "",
      production_company_name: "",
      user_type: "user",
    },
    resolver: yupResolver(registerSchema),
  });
  const roleValue = watch("user_type");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] =
    useState<boolean>(false);
  const [typePasswordInput, setTypePasswordInput] = useState(true);

  const onSubmit = async (data: IRegisterFormValues) => {
    try {
      setLoading(true);
      const res = await registerApi(data);
      successHandler(res.message);
      authenticationUser(res.data);
      replace(routes.welcome);
      // replace(routes.verifyEmail);
    } catch (error) {
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
