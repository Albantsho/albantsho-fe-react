import useAuthApi, {
  type IData_AuthorizationUser
} from "apis/Auth.api";
import useWithdrawApi, { type IPayloadWithdrawVerify } from "apis/withdraw.api";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";

const queryClient = new QueryClient();

const useWithdrawVerify = () => {
  const { user } = useUserStore.getState();
  const [countDownKey, setCountDownKey] = useState(1);
  const { setAccessToken, authenticationUser } = useUserStore((state) => ({
    setAccessToken: state.setAccessToken,
    authenticationUser: state.authenticationUser,
  }));
  const { replace, query } = useRouter();
  const { resendCode } = useAuthApi();
  const { withdrawVerify } = useWithdrawApi();
  const inputs = useRef<HTMLInputElement[]>([]);
  const [formValues, setFormValues] = useState<{ [key: number]: string; }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const { mutate: verifyWithdraw, isLoading: loadingVerifyWithdraw } = useMutation<
    IData_AuthorizationUser,
    Error,
    IPayloadWithdrawVerify
  >((withdraw) => withdrawVerify(withdraw), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data) => {
      //TODO => redirect to success withdraw
      "";
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
    verifyWithdraw({
      withdrawId: query["withdraw_id"] as string,
      otp: Object.values(formValues).join(""),

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
    loading: loadingVerifyWithdraw,
    loadingResendCode,
  };
};

export default useWithdrawVerify;
