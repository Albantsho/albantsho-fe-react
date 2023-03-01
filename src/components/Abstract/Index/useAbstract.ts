import { yupResolver } from "@hookform/resolvers/yup";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { abstractSchema } from "./validation/abstract.validation";

type IScript = IFullInformationScript;

let controller = new AbortController();
let controllerAdaption = new AbortController();

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
  const axiosPrivate = useAxiosPrivate();
  const [imageCoverError, setImageCoverError] = useState("");
  const [adaptionPermissionError, setAdaptionPermissionError] = useState("");
  const [progressAdaption, setProgressAdaption] = useState(0);
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
      storyFormat: script?.storyFormat ? script?.storyFormat : "High Concept",
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

  const publishScript = () => setPublish(true);
  const updateScriptFunc = () => setPublish(false);

  const handleUploadImageCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    controller = new AbortController();
    if (!e.target.files) {
      toast.error("Image is required field");
      setImageCoverError("Image is required field");
    } else if (e.target.files.length <= 0) {
      toast.error("Image is required field");
      setImageCoverError("Image is required field");
    } else if (e.target.files[0].size / 1024 > 5120) {
      toast.error("The file is to large, must less than 5MB");
      setImageCoverError("The file is to large, must less than 5MB");
    } else {
      setImageCoverError("");
      axiosPrivate
        .post(
          `/script/image/${script._id}`,
          { image: e.target.files[0] },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percentage = (loaded * 100) / total;
              setProgress(percentage);
            },
            signal: controller.signal,
          }
        )
        .then((res) => toast.success(res.data.message));
    }
  };

  const handleUploadAdaptionPermission = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdaption(true);
    controllerAdaption = new AbortController();
    if (!e.target.files) {
      toast.error("please upload file adaption permission");
      setAdaptionPermissionError("please upload file adaption permission");
      setAdaption(false);
    } else if (e.target.files.length <= 0) {
      toast.error("please upload file adaption permission");
      setAdaptionPermissionError("please upload file adaption permission");
      setAdaption(false);
    } else if (e.target.files[0].size / 1024 > 5120) {
      toast.error("The file is to large, must less than 5MB");
      setAdaptionPermissionError("The file is to large, must less than 5MB");
      setAdaption(false);
    } else {
      setAdaptionPermissionError("");
      axiosPrivate
        .post(
          `/script/adaptionPermission/${script._id}`,
          { adaptionPermission: e.target.files[0] },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percentage = (loaded * 100) / total;
              setProgressAdaption(percentage);
            },
            signal: controller.signal,
          }
        )
        .then((res) => toast.success(res.data.message));
    }
  };

  const cancelUpload = () => {
    controller.abort();
    setProgress(0);
    toast.error("upload canceled");
  };

  const cancelUploadAdaption = () => {
    setAdaption(false);
    controllerAdaption.abort();
    setProgressAdaption(0);
    toast.error("upload canceled");
  };

  const onSubmit = async (data: IAbstractFormValues) => {
    if (publish) {
      try {
        setLoadingPublishButton(true);
        await updateScript(
          {
            primaryGenre: data.primaryGenre,
            secondaryGenre: data.secondaryGenre,
            title: data.title,
            scriptFormat: data.scriptFormat,
            storyFormat: data.storyFormat,
            primaryCast: data.primaryCast,
            secondaryCast: data.secondaryCast,
            estimatedBudget: data.estimatedBudget,
            tagline: data.tagline,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            storyTopics: data.storyTopics,
            logLine: data.logLine,
            adaption,
          },
          query.id as string,
          "publish=true"
        );

        if (activeButton === 0 && data.draft) {
          await selectedDraft(data.draft, {
            draftScriptId: data.draft,
          });
        } else if (activeButton === 1) {
          await uploadFileDraft(query.id as string, {
            script: data.scriptFile[0],
          });
          await uploadCopyright(query.id as string, {
            copyright: data.scriptCopyright[0],
          });
        }
        replace(routes.projectsDashboard.url);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingPublishButton(false);
      }
    } else {
      try {
        setLoadingUpdateButton(true);
        await updateScript(
          {
            primaryGenre: data.primaryGenre,
            secondaryGenre: data.secondaryGenre,
            title: data.title,
            scriptFormat: data.scriptFormat,
            storyFormat: data.storyFormat,
            primaryCast: data.primaryCast,
            secondaryCast: data.secondaryCast,
            estimatedBudget: data.estimatedBudget,
            tagline: data.tagline,
            synopsis: data.synopsis,
            storyWorld: data.storyWorld,
            actStructure: data.actStructure,
            characterBible: data.characterBible,
            inspiration: data.inspiration,
            motivation: data.motivation,
            storyTopics: data.storyTopics,
            logLine: data.logLine,
            adaption,
          },
          query.id as string
        );

        if (activeButton === 0 && data.draft) {
          if (data.draft) {
            await selectedDraft(data.draft, {
              draftScriptId: data.draft,
            });
          }
        } else if (activeButton === 1) {
          if (data.scriptFile && data.scriptFile[0]) {
            await uploadFileDraft(query.id as string, {
              script: data.scriptFile[0],
            });
          }
          if (data.scriptCopyright && data.scriptCopyright[0]) {
            await uploadCopyright(query.id as string, {
              copyright: data.scriptCopyright[0],
            });
          }
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
    adaption,
    getValues,
    progress,
    publish,
    handleUploadImageCover,
    imageCoverError,
    cancelUpload,
    handleUploadAdaptionPermission,
    adaptionPermissionError,
    progressAdaption,
    cancelUploadAdaption,
  };
};

export default useAbstract;
