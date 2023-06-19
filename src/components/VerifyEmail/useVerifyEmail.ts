import useAuthApi, {
  type IData_AuthorizationUser,
  type IEmailVerifyOtp
} from "apis/Auth.api";
import Router, { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";

const queryClient = new QueryClient();

const useVerifyEmail = () => {
  const { user } = useUserStore.getState();
  const [countDownKey, setCountDownKey] = useState(1);
  const { authenticationUser } = useUserStore((state) => ({
    authenticationUser: state.authenticationUser,
  }));
  const router = useRouter();
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
      authenticationUser(data.user);

      if (data.user.userType === "producer") {
        Router.router?.components["/marketplace/[id]"] ? router.back() : router.replace(routes.marketplace.url);
      } else {
        data.user.userType === "writer"
          ? router.replace(routes.writerDashboard.url)
          : data.user.userType === "admin"
            ? router.replace(routes.adminDashboard.url)
            : router.replace(routes.reviewerDashboard.url);
      }
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
