import useWithdrawApi, { type IPayloadWithdrawVerify } from "apis/withdraw.api";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import { useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const useWithdrawVerify = () => {
  const [countDownKey, setCountDownKey] = useState(1);
  const { query } = useRouter();
  const { withdrawVerify, resendOtp } = useWithdrawApi();
  const inputs = useRef<HTMLInputElement[]>([]);
  const [formValues, setFormValues] = useState<{ [key: number]: string; }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const { mutate: verifyWithdraw, isLoading: loadingVerifyWithdraw } = useMutation<
    { message: string; },
    Error,
    IPayloadWithdrawVerify
  >((withdraw) => withdrawVerify(withdraw), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data) => {
      successHandler(data.message);
      //TODO => redirect to success withdraw
      "";
    },
  });

  const { mutate: resendCodeFn, isLoading: loadingResendCode } = useMutation<
    { message: string; },
    Error
  >(() => resendOtp(query["withdraw_id"] as string), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: (data) => {
      successHandler(data.message);
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

  const handleResendCode = () => resendCodeFn();

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
