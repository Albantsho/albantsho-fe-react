import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi, {
  type IData_signupUser,
  type IRegisterPayload,
} from "apis/Auth.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import useUserStore from "store/user.store";
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

const queryClient = new QueryClient();

const useRegisterForm = () => {
  const { signup } = useAuthApi();
  const { replace } = useRouter();
  const authenticationUser = useUserStore((state) => state.authenticationUser);

  const { mutate, isLoading } = useMutation<
    IData_signupUser,
    Error,
    IRegisterPayload
  >((user) => signup(user), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
      authenticationUser(data.user);
      replace(routes.verifyEmail.url);
    },
  });

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
      delete data.fullname;
      if (data.userType === "writer") {
        mutate({
          firstName: splitFullName.slice(0, splitFullName.length - 1).join(" "),
          lastName: splitFullName[splitFullName.length - 1],
          country: data.country,
          email: data.email,
          gender: data.gender,
          password: data.password,
          userType: data.userType,
        });
      } else if (data.userType === "producer") {
        mutate({
          firstName: splitFullName.slice(0, splitFullName.length - 1).join(" "),
          lastName: splitFullName[splitFullName.length - 1],
          country: data.country,
          email: data.email,
          gender: data.gender,
          password: data.password,
          userType: data.userType,
          portfolio: data.portfolio,
          productionCompanyName: data.productionCompanyName,
        });
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
    loading: isLoading,
  };
};

export default useRegisterForm;
