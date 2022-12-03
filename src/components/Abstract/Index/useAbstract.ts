import { yupResolver } from "@hookform/resolvers/yup";
import { IAbstractFormValues } from "interfaces/abstract";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { abstractSchema } from "./validation/abstract.validation";

const useAbstract = () => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);
  // const [loading, setLoading] = useState(false);
  const [publish, setPublish] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAbstractFormValues>({
    defaultValues: {
      script_type: "documentary",
      storyFormat: "highConcept",
      primary_genre: "documentary",
      secondary_genre: "romance",
      primary_cast: "200",
      secondary_cast: "50",
      estimated_budger: "high",
      theme: ["love"],
    },
    resolver: yupResolver(abstractSchema(publish)),
  });

  const publishScript = () => setPublish(true);
  const updateScript = () => setPublish(false);

  const onSubmit = (data: IAbstractFormValues) => {
    console.log(data);
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
    publishScript,
    updateScript,
  };
};

export default useAbstract;
