import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useState } from "react";
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
  const [activeButton, setActiveButton] = useState<number>(0);
  const [loadingPublishButton, setLoadingPublishButton] = useState(false);
  const [loadingUpdateButton, setLoadingUpdateButton] = useState(false);
  const [publish, setPublish] = useState(false);
  const { query } = useRouter();
  const { updateScript, addScriptTheme } = useScriptsApi();
  const { uploadFileDraft } = useDraftApi();
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      theme: script.theme
        ? script.theme.map((theme) => ({ label: theme }))
        : [{ label: "love" }],
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
    console.log(data.theme);

    if (publish) {
      try {
        setLoadingPublishButton(true);
        const res = await updateScript(
          {
            primary_genre: data.primary_genre,
            secondary_genre: data.secondary_genre,
            title: data.title,
            script_type: data.script_type,
            storyFormat: data.storyFormat,
            primary_cast: data.primary_cast,
            secondary_cast: data.secondary_cast,
            estimated_budger: data.estimated_budger,
            tagline: data.tagline,
            synopsis: data.synopsis,
            story_world: data.story_world,
            act_structure: data.act_structure,
            character_bible: data.character_bible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
          },
          query.id as string
        );
        const resTheme = await addScriptTheme(
          { theme: data.theme.map((theme) => theme.label) },
          query.id as string
        );
        if (data.scriptFile) {
          const arrayBuffer = await fileToArrayBuffer(data.scriptFile[0]);
          const html = await wordToHtml(arrayBuffer);
          const htmlContent = new DOMParser().parseFromString(
            html as string,
            "text/html"
          );
          const deserialize = deserializeDocx(htmlContent.body);
          const res = await uploadFileDraft(query.id as string, {
            content: deserialize,
          });
          console.log(res);
        }
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
            primary_genre: data.primary_genre,
            secondary_genre: data.secondary_genre,
            title: data.title,
            script_type: data.script_type,
            storyFormat: data.storyFormat,
            primary_cast: data.primary_cast,
            secondary_cast: data.secondary_cast,
            estimated_budger: data.estimated_budger,
            tagline: data.tagline,
            synopsis: data.synopsis,
            story_world: data.story_world,
            act_structure: data.act_structure,
            character_bible: data.character_bible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
          },
          query.id as string
        );
        console.log(res);
        const resTheme = await addScriptTheme(
          { theme: data.theme.map((theme) => theme.label) },
          query.id as string
        );
        console.log(resTheme);

        if (data.scriptFile) {
          const arrayBuffer = await fileToArrayBuffer(data.scriptFile[0]);
          const html = await wordToHtml(arrayBuffer);
          const htmlContent = new DOMParser().parseFromString(
            html as string,
            "text/html"
          );
          const deserialize = deserializeDocx(htmlContent.body);
          const res = await uploadFileDraft(query.id as string, {
            content: deserialize,
          });
          console.log(res);
        }
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
