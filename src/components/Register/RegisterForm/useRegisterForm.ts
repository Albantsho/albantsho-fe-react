import { useState } from "react";
import { useForm } from "react-hook-form";

interface IAuthSignup {
  full_name: string;
  email: string;
  password: string;
  country: string;
  role: string;
  portfolio?: string;
  production_company_name?: string;
}

const useRegisterForm = () => {
  const { register, watch, control, handleSubmit } = useForm<IAuthSignup>({
    defaultValues: {
      full_name: "",
      email: "",
      country: "",
      password: "",
      portfolio: "",
      production_company_name: "",
      role: "writer",
    },
  });
  const roleValue = watch("role");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] =
    useState<boolean>(false);
  const [typePasswordInput, setTypePasswordInput] = useState(true);

  const onSubmit = (data: IAuthSignup) => {
    console.log(data);
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
  };
};

export default useRegisterForm;
