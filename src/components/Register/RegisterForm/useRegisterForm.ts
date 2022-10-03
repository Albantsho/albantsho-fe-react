import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validation/register.validation";
import AuthApi from "apis/Auth.api";
import { useDispatch } from "react-redux";
import { registerType } from "../../../app/features/user/userSlice";

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
  const dispatch = useDispatch();

  const onSubmit = async (data: IRegisterFormValues) => {
    console.log(data);
    try {
      const res = await AuthApi().register(data);
      console.log({ res });
      await localStorage.setItem("USER_Token", res.data.token);
      await dispatch(registerType({ user: res.data }));
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
  };
};

export default useRegisterForm;
