import React, { useState, useRef } from "react";

const useVerifyEmail = () => {
  const inputs = useRef<HTMLInputElement[]>([]);
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({ ...prev, [index]: event.target.value }));
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

  const onSubmit = (e: React.FormEvent) => {
    console.log(e);
  };

  return {
    handleChange,
    onSubmit,
    inputs,
    formValues,
    handleAutoFocus,
  };
};

export default useVerifyEmail;