import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
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
  const [openCongratulation, setOpenCongratulation] = useState(false);
  const { push } = useRouter();
  const { registerUser } = useUserStore();
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
      const res = await registerApi(data);
      await registerUser(res.data);
      // await push(routes.verifyEmail);
      await setOpenCongratulation(true);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleAcceptTermsAndCondition = () => {
    setAcceptTermsAndCondition((prevState) => !prevState);
  };
  const handleTypeInputPassword = () => {
    setTypePasswordInput((prevState) => !prevState);
  };

  const handleCloseCongratulation = () => {
    setOpenCongratulation(false);
    push(routes.blog);
  };
  const handleGoToHomePage = () => {
    setOpenCongratulation(false);
    push(routes.home);
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
    handleCloseCongratulation,
    openCongratulation,
    handleGoToHomePage,
  };
};

export default useRegisterForm;
