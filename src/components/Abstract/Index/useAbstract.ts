import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { abstractSchema } from "./validation/abstract.validation";

const useAbstract = () => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);
  const [loadingPublishButton, setLoadingPublishButton] = useState(false);
  const [loadingUpdateButton, setLoadingUpdateButton] = useState(false);
  const [publish, setPublish] = useState(false);
  const { updateScript, addScriptTheme } = useScriptsApi();

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
  const updateScriptFunc = () => setPublish(false);

  const onSubmit = async (data: IAbstractFormValues) => {
    if (publish) {
      try {
        setLoadingPublishButton(true);
        const res = await updateScript(data, "1");
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingPublishButton(false);
      }
    } else {
      try {
        setLoadingUpdateButton(true);
        const res = await addScriptTheme({ theme: data.theme }, "1");
        setOpenSaveProgressModal(true);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingUpdateButton(false);
      }
    }
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
    updateScriptFunc,
    loadingPublishButton,
    loadingUpdateButton,
  };
};

export default useAbstract;
