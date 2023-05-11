import useAuthApi, {
  type IData_AuthorizationUser,
  type IEmailVerifyOtp,
} from "apis/Auth.api";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import routes from "utils/routes";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";

const queryClient = new QueryClient();

const useVerifyEmail = () => {
  const { user } = useUserStore.getState();
  const [countDownKey, setCountDownKey] = useState(1);
  const { setAccessToken, authenticationUser } = useUserStore((state) => ({
    setAccessToken: state.setAccessToken,
    authenticationUser: state.authenticationUser,
  }));
  const { replace } = useRouter();
  const { emailVerify, resendCode } = useAuthApi();
  const inputs = useRef<HTMLInputElement[]>([]);
  const [formValues, setFormValues] = useState<{ [key: number]: string; }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const { mutate: verifyUser, isLoading: loadingVerifyUser } = useMutation<
    IData_AuthorizationUser,
    Error,
    IEmailVerifyOtp
  >((user) => emailVerify(user), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
      setAccessToken(data.accessToken);
      authenticationUser(data.user);
      data.user.userType === "writer"
        ? replace(routes.writerDashboard.url)
        : data.user.userType === "producer"
          ? replace(routes.producerDashboard.url)
          : data.user.userType === "admin"
            ? replace(routes.adminDashboard.url)
            : replace(routes.reviewerDashboard.url);
    },
  });

  const { mutate: resendCodeFn, isLoading: loadingResendCode } = useMutation<
    void,
    Error,
    { email: string; }
  >((user) => resendCode(user), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: () => {
      setCountDownKey((prevState) => prevState + 1);
    },
  });

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const result = event.target.value.replace(/\D/g, "");
      setFormValues((prev) => ({ ...prev, [index]: result }));
    };

  const handleAutoFocus =
    (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = event.target as unknown as EventTarget &
        HTMLInputElement;
      // INFO: Auto focus next or previous input
      if (index < 4 && value) {
        inputs.current[index + 1].focus();
      } else if (index !== 0 && !value) {
        inputs.current[index - 1].focus();
      }
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    verifyUser({
      email: user.email,
      code: Object.values(formValues).join(""),
    });
  };

  const handleResendCode = async () => resendCodeFn({ email: user.email });

  return {
    handleChange,
    onSubmit,
    inputs,
    formValues,
    handleAutoFocus,
    handleResendCode,
    countDownKey,
    loading: loadingVerifyUser,
    loadingResendCode,
  };
};

export default useVerifyEmail;
