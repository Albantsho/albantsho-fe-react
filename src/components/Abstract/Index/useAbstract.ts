import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { abstractSchema } from "./validation/abstract.validation";
import { useForm } from "react-hook-form";
import { IAbstractFormValues } from "interfaces/abstract";

const useAbstract = () => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAbstractFormValues>({
    defaultValues: {},
    resolver: yupResolver(abstractSchema),
  });

  useEffect(() => {
    {
      query.step ? setStep(Number(query.step)) : setStep(1);
    }
  }, [query]);

  const onSubmit = () => {
    ("");
  };

  return {
    setOpenSaveProgressModal,
    openSaveProgressModal,
    activeButton,
    setActiveButton,
    step,
    setStep,
    register,
    errors,
    handleSubmit,
    onSubmit,
    control,
  };
};

export default useAbstract;
