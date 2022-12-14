import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { wordToHtml } from "utils/word-to-html";
import { abstractSchema } from "./validation/abstract.validation";
import fileToArrayBuffer from "file-to-array-buffer";
import deserializeDocx from "utils/desrialize-docx";
import useDraftApi from "apis/Draft.api";

type IScript = IFullInformationScript;

const useAbstract = (script: IScript) => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [adaption, setAdaption] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);
  const [loadingPublishButton, setLoadingPublishButton] = useState(false);
  const [loadingUpdateButton, setLoadingUpdateButton] = useState(false);
  const [publish, setPublish] = useState(false);
  const [progress, setProgress] = useState(0);
  const { query } = useRouter();
  const { updateScript, addScriptTheme } = useScriptsApi();
  const { uploadFileDraft } = useDraftApi();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<IAbstractFormValues>({
    defaultValues: {
      title: script?.title ? script?.title : "",
      scriptFormat: script?.scriptFormat ? script?.scriptFormat : "documentary",
      storyFormat: script?.scriptFormat ? script?.scriptFormat : "highConcept",
      primaryGenre: script?.primaryGenre ? script?.primaryGenre : "documentary",
      secondaryGenre: script?.secondaryGenre
        ? script?.secondaryGenre
        : "romance",
      primaryCast: script?.primaryCast ? script?.primaryCast : "200",
      secondaryCast: script?.secondaryCast ? script?.secondaryCast : "50",
      estimatedBudget: script?.estimatedBudget
        ? script?.estimatedBudget
        : "high",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      theme: script.theme
        ? script.theme.map((theme) => ({ label: theme }))
        : [{ label: "love" }],
      tagLine: script?.tagLine ? script?.tagLine : "",
      logLine: script?.logLine ? script?.logLine : "",
      synopsis: script?.synopsis ? script?.synopsis : "",
      storyWorld: script?.storyWorld ? script?.storyWorld : "",
      actStructure: script?.actStructure ? script?.actStructure : "",
      characterBible: script?.characterBible ? script?.characterBible : "",
      inspiration: script?.inspiration ? script?.inspiration : "",
      motivation: script?.motivation ? script?.motivation : "",
    },
    resolver: yupResolver(abstractSchema(publish)),
  });

  useEffect(() => {
    const formValues = getValues();
    const allFields = Object.keys(formValues);
    const completedFields = Object.values(formValues).filter((field) => field);

    console.log(allFields, completedFields);
    console.log((completedFields.length / allFields.length) * 100);
    setProgress((completedFields.length / allFields.length) * 100);
  }, [getValues()]);

  const publishScript = () => setPublish(true);
  const updateScriptFunc = () => setPublish(false);

  const onSubmit = async (data: IAbstractFormValues) => {
    console.log(data.theme);

    if (publish) {
      try {
        setLoadingPublishButton(true);
        const res = await updateScript(
          {
            primaryGenre: data.primaryGenre,
            secondaryGenre: data.secondaryGenre,
            title: data.title,
            scriptFormat: data.scriptFormat,
            storyFormat: data.storyFormat,
            primaryCast: data.primaryCast,
            secondaryCast: data.secondaryCast,
            estimatedBudget: data.estimatedBudget,
            tagLine: data.tagLine,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
            theme: data.theme.map((theme) => theme.label),
          },
          query.id as string
        );
        // const resTheme = await addScriptTheme(
        //   { theme: data.theme.map((theme) => theme.label) },
        //   query.id as string
        // );
        const resDraft = await uploadFileDraft(query.id as string, {
          content: data.scriptFile,
        });
        console.log(resDraft);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingPublishButton(false);
      }
    } else {
      try {
        setLoadingUpdateButton(true);
        const res = await updateScript(
          {
            primaryGenre: data.primaryGenre,
            secondaryGenre: data.secondaryGenre,
            title: data.title,
            scriptFormat: data.scriptFormat,
            storyFormat: data.storyFormat,
            primaryCast: data.primaryCast,
            secondaryCast: data.secondaryCast,
            estimatedBudget: data.estimatedBudget,
            tagLine: data.tagLine,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
            theme: data.theme.map((theme) => theme.label),
          },
          query.id as string
        );
        console.log(res);
        // const resTheme = await addScriptTheme(
        //   { theme: data.theme.map((theme) => theme.label) },
        //   query.id as string
        // );
        // console.log(resTheme);
        const resDraft = await uploadFileDraft(query.id as string, {
          content: data.scriptFile,
        });
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
    adaption,
    setAdaption,
    getValues,
    progress,
    publish,
  };
};

export default useAbstract;
