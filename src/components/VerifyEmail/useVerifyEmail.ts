import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const useVerifyEmail = () => {
  const { user } = useUserStore.getState();
  const [countDownKey, setCountDownKey] = useState(1);
  const [loading, setLoading] = useState(false);
  const { setAccessToken, authenticationUser } = useUserStore((state) => ({
    setAccessToken: state.setAccessToken,
    authenticationUser: state.authenticationUser,
  }));
  const { replace } = useRouter();
  const { emailVerify, resendCode } = useAuthApi();
  const inputs = useRef<HTMLInputElement[]>([]);
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
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
    try {
      setLoading(true);
      const res = await emailVerify({
        email: user.email,
        code: Object.values(formValues).join(""),
      });
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyMGU3ZTllNDhmM2Q5MzBmMmU3NDkiLCJpYXQiOjE2Njg0MTkzMDYsImV4cCI6MTY4NTY5OTMwNn0.UgJ7XxtjSNceq3G9lgJPlzcZT9Fph3Ne8a_w_uyl7tM"
      );
      authenticationUser(res.data.user);

      successHandler(res.message);
      replace(routes.home);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const res = await resendCode({ email: user.email });

      setCountDownKey((prevState) => prevState + 1);
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    handleChange,
    onSubmit,
    inputs,
    formValues,
    handleAutoFocus,
    handleResendCode,
    countDownKey,
    loading,
  };
};

export default useVerifyEmail;
