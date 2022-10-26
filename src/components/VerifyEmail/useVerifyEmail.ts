import useAuthApi from "apis/Auth.api";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const useVerifyEmail = () => {
  const { replace } = useRouter();
  const { emailVerify } = useAuthApi();
  const inputs = useRef<HTMLInputElement[]>([]);
  const [resendCode, setResendCode] = useState(false);
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  let targetTime = 120000000 + new Date().getTime();

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
      if (index < 5 && value) {
        inputs.current[index + 1].focus();
      } else if (index !== 0 && !value) {
        inputs.current[index - 1].focus();
      }
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await emailVerify({
        otp: Object.values(formValues).join(""),
      });
      successHandler(res.message);
      replace(routes.home);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleResendCode = () => {
    targetTime = 120000000 + new Date().getTime();
    setResendCode(true);
  };

  return {
    handleChange,
    onSubmit,
    inputs,
    formValues,
    handleAutoFocus,
    handleResendCode,
    targetTime,
  };
};

export default useVerifyEmail;
