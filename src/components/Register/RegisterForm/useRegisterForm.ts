import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import useUserStore from "store/user.store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { registerSchema } from "./validation/register.validation";

interface IRegisterFormValues {
  fullname?: string;
  email: string;
  password: string;
  country: string;
  userType: "writer" | "producer";
  portfolio?: string;
  productionCompanyName?: string;
  gender: "male" | "female";
}

const useRegisterForm = () => {
  const { signup } = useAuthApi();
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();

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
      userType: "writer",
      gender: "male",
    },
    resolver: yupResolver(registerSchema),
  });
  const roleValue = watch("userType");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] =
    useState<boolean>(false);
  const [typePasswordInput, setTypePasswordInput] = useState(true);

  const onSubmit = async (data: IRegisterFormValues) => {
    if (data.fullname) {
      const splitFullName = data.fullname.trim().split(" ");
      try {
        delete data.fullname;
        setLoading(true);
        if (data.userType === "writer") {
          const res = await signup({
            firstName: splitFullName
              .slice(0, splitFullName.length - 1)
              .join(" "),
            lastName: splitFullName[splitFullName.length - 1],
            country: data.country,
            email: data.email,
            gender: data.gender,
            password: data.password,
            userType: data.userType,
          });
          authenticationUser(res.data.user);
          replace(routes.verifyEmail.url);
        } else if (data.userType === "producer") {
          const res = await signup({
            firstName: splitFullName
              .slice(0, splitFullName.length - 1)
              .join(" "),
            lastName: splitFullName[splitFullName.length - 1],
            country: data.country,
            email: data.email,
            gender: data.gender,
            password: data.password,
            userType: data.userType,
            portfolio: data.portfolio,
            productionCompanyName: data.productionCompanyName,
          });
          authenticationUser(res.data.user);
          replace(routes.verifyEmail.url);
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
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
