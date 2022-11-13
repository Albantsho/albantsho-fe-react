import useAuthApi from "apis/Auth.api";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import shallow from "zustand/shallow";

// const useUser = () => {
//   const { user, verifyUser } = useUserStore(
//     (store) => ({
//       user: store.user,
//       verifyUser: store.verifyUser,
//     }),
//     shallow
//   );
//   return { user, verifyUser };
// };

const useVerifyEmail = () => {
  const { user } = useUserStore.getState();
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  // const { setItem } = useUserStore.persist
  //   .getOptions(() => user)
  //   .getStorage(() => "user");
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
      if (index < 4 && value) {
        inputs.current[index + 1].focus();
      } else if (index !== 0 && !value) {
        inputs.current[index - 1].focus();
      }
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(user.email);
      // console.log(setItem());

      const res = await emailVerify({
        email: user.email,
        code: Object.values(formValues).join(""),
      });
      console.log(res);

      setAccessToken(res.data.accessToken);

      successHandler(res.message);
      replace(routes.home);
    } catch (error) {
      console.log(error);

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
