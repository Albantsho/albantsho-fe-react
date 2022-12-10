import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { abstractSchema } from "./validation/abstract.validation";

type IScript = IFullInformationScript;

const useAbstract = (script: IScript) => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);
  const [loadingPublishButton, setLoadingPublishButton] = useState(false);
  const [loadingUpdateButton, setLoadingUpdateButton] = useState(false);
  const [publish, setPublish] = useState(false);
  const { updateScript, addScriptTheme } = useScriptsApi();
  const { query } = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAbstractFormValues>({
    defaultValues: {
      title: script?.title ? script?.title : "",
      script_type: script?.script_type ? script?.script_type : "documentary",
      storyFormat: script?.scriptFormat ? script?.scriptFormat : "highConcept",
      primary_genre: script?.primary_genre
        ? script?.primary_genre
        : "documentary",
      secondary_genre: script?.secondary_genre
        ? script?.secondary_genre
        : "romance",
      primary_cast: script?.primary_cast ? script?.primary_cast : "200",
      secondary_cast: script?.secondary_cast ? script?.secondary_cast : "50",
      estimated_budger: script?.estimated_budget
        ? script?.estimated_budget
        : "high",
      theme: [{ label: "love" }],
      tagline: script?.tagline ? script?.tagline : "",
      log_line: script?.log_line ? script?.log_line : "",
      synopsis: script?.synopsis ? script?.synopsis : "",
      story_world: script?.story_world ? script?.story_world : "",
      act_structure: script?.act_structure ? script?.act_structure : "",
      character_bible: script?.character_bible ? script?.character_bible : "",
      inspiration: script?.inspiration ? script?.inspiration : "",
      motivation: script?.motivation ? script?.motivation : "",
    },
    resolver: yupResolver(abstractSchema(publish)),
  });

  const publishScript = () => setPublish(true);
  const updateScriptFunc = () => setPublish(false);

  const onSubmit = async (data: IAbstractFormValues) => {
    if (publish) {
      try {
        setLoadingPublishButton(true);
        const res = await updateScript(
          { ...data, image: data.image[0] },
          query.id as string
        );
        const resTheme = await addScriptTheme(
          { theme: data.theme.map((theme) => theme.label) },
          query.id as string
        );
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingPublishButton(false);
      }
    } else {
      try {
        setLoadingUpdateButton(true);
        const res = await updateScript(
          { ...data, image: data.image[0] },
          query.id as string
        );
        const resTheme = await addScriptTheme(
          { theme: data.theme.map((theme) => theme.label) },
          query.id as string
        );
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
