import { yupResolver } from "@hookform/resolvers/yup";
import useMouse from "@react-hook/mouse-position";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { abstractSchema } from "./validation/abstract.validation";

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
  const { query, replace } = useRouter();
  const { updateScript } = useScriptsApi();
  const { uploadFileDraft, uploadCopyright, selectedDraft } = useDraftApi();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<IAbstractFormValues>({
    defaultValues: {
      title: script?.title ? script?.title : "",
      scriptFormat: script?.scriptFormat ? script?.scriptFormat : "Documentary",
      storyFormat: script?.scriptFormat ? script?.scriptFormat : "High Concept",
      primaryGenre: script?.primaryGenre ? script?.primaryGenre : "Action",
      secondaryGenre: script?.secondaryGenre
        ? script?.secondaryGenre
        : "Comedy",
      primaryCast: script?.primaryCast ? script?.primaryCast : "200",
      secondaryCast: script?.secondaryCast ? script?.secondaryCast : "50",
      estimatedBudget: script?.estimatedBudget
        ? script?.estimatedBudget
        : "high",
      storyTopics: script.storyTopics && script.storyTopics,
      tagline: script?.tagline ? script?.tagline : "",
      logLine: script?.logLine ? script?.logLine : "",
      synopsis: script?.synopsis ? script?.synopsis : "",
      storyWorld: script?.storyWorld ? script?.storyWorld : "",
      actStructure: script?.actStructure ? script?.actStructure : "",
      characterBible: script?.characterBible ? script?.characterBible : "",
      inspiration: script?.inspiration ? script?.inspiration : "",
      motivation: script?.motivation ? script?.motivation : "",
    },
    resolver: yupResolver(abstractSchema(publish, activeButton)),
  });
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 3000,
    leaveDelay: 3000,
  });

  useEffect(() => {
    const formValues = getValues();
    let allFields = Object.keys(formValues);
    if (activeButton === 0) {
      allFields = allFields.filter(
        (field) => field !== "scriptFile" && field !== "scriptCopyright"
      );
    } else if (activeButton === 1) {
      allFields = allFields.filter((field) => field !== "draft");
    }
    const completedFields = Object.values(formValues).filter((field) => {
      if (field && field.length && field.length > 0) {
        return field;
      }
    });
    setProgress((completedFields.length / allFields.length) * 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouse]);

  const publishScript = () => setPublish(true);
  const updateScriptFunc = () => setPublish(false);

  const addAdaption = () => setAdaption(true);
  const noAddAdaption = () => setAdaption(false);

  console.log(errors);
  const onSubmit = async (data: IAbstractFormValues) => {
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
            tagLine: data.tagline,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
            storyTopics: data.storyTopics,
            logLine: data.logLine,
            adaption,
            adaptionPermission: data.adaptionPermission[0],
            progress: progress >= 100 ? 100 : progress,
          },
          query.id as string,
          "publish=true"
        );
        if (activeButton === 0) {
          const resSelectDraft = await selectedDraft(data.draft, {
            draftScriptId: data.draft,
          });
          console.log(resSelectDraft);
        } else if (activeButton === 1) {
          const resDraft = await uploadFileDraft(query.id as string, {
            content: data.scriptFile[0],
          });
          const resCopyright = await uploadCopyright(query.id as string, {
            content: data.scriptCopyright[0],
          });
          console.log(resDraft, resCopyright);
        }
        console.log(res);

        // replace(routes.projectsDashboard.url);
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
            tagLine: data.tagline,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            image: data.image[0],
            storyTopics: data.storyTopics,
            logLine: data.logLine,
            adaption,
            adaptionPermission: data.adaptionPermission[0],
            progress: progress >= 100 ? 100 : progress,
          },
          query.id as string
        );
        if (activeButton === 0) {
          if (data.draft) {
            const resSelectDraft = await selectedDraft(data.draft, {
              draftScriptId: data.draft,
            });
            console.log(resSelectDraft);
          }
        } else if (activeButton === 1) {
          if (data.scriptFile && data.scriptFile[0]) {
            const resDraft = await uploadFileDraft(query.id as string, {
              content: data.scriptFile[0],
            });
            console.log(resDraft);
          }
          if (data.scriptCopyright && data.scriptCopyright[0]) {
            const resCopyright = await uploadCopyright(query.id as string, {
              content: data.scriptCopyright[0],
            });
            console.log(resCopyright);
          }
        }
        console.log(res);

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
    getValues,
    progress,
    publish,
    addAdaption,
    noAddAdaption,
    ref,
  };
};

export default useAbstract;
