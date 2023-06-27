import { yupResolver } from "@hookform/resolvers/yup";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import customHandler from "utils/custom-handler";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import successHandler from "utils/success-handler";
import { abstractSchema } from "./validation/abstract.validation";

type IScript = IFullInformationScript;

let controller = new AbortController();
let controllerAdaption = new AbortController();

const useAbstract = (script: IScript, refetch: any) => {
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
  const [adaptionPermissionError, setAdaptionPermissionError] = useState("");
  const [progressAdaption, setProgressAdaption] = useState(0);
  const [progressCopyright, setProgressCopyright] = useState(0);
  const [progressScript, setProgressScript] = useState(0);
  const { selectedDraft } = useDraftApi();
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

  async function updateData() {
    try {
      const data = getValues();
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
    } catch (error) {
      "";
    }
  }

  useEffect(() => {
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const updateDataAfterBlurInput = async () => {
    updateData();
  };

  const dropZoneUploadPdfScript = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "text/txt": [".txt"],
      "application/fdx": [".fdx"]
    },
    maxFiles: 1,
    onDropAccepted: async (files, _event) => {

      try {
        setProgressScript(0);
        const snippet = await files[0].text();
        updateScript({ scriptSnippet: snippet.slice(0, (files[0].type === "text/plain" || files[0].type === "application/pdf") ? 1500 : 3000) }, query.id as string);
        const res = await axiosPrivate
          .post(
            `/draft/upload/${script._id}`,
            { script: files[0] },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percentage = (loaded * 100) / total;
                setProgressScript(percentage);
              },
            }
          );
        successHandler(res.data.message);
      } catch (error) {
        errorHandler(error);
      }

    },
  });

  const dropZoneUploadPdfCopyright = useDropzone({
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
      "text/txt": [".txt"],
      "application/fdx": [".fdx"]
    },
    onDropAccepted: async (files, _event) => {
      try {
        setProgressCopyright(0);
        const res = await axiosPrivate
          .post(
            `/draft/copyright/${script._id}`,
            { copyright: files[0] },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percentage = (loaded * 100) / total;
                setProgressCopyright(percentage);
              }
            }
          );
        successHandler(res.data.message);
      } catch (error) {
        errorHandler(error);
      }

    },
  });

  const dropZoneUploadImage = useDropzone({
    maxFiles: 1,
    accept: { 'image/*': [] },
    onDropAccepted: async (files, _event) => {
      controller = new AbortController();
      setProgress(0);
      if (files[0].size / 1024 > 5120) {
        customHandler("The file is to large, must less than 5MB");
        return;
      }
      axiosPrivate
        .post(
          `/script/image/${script._id}`,
          { image: files[0] },
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
        ).then(res => {
          refetch();
          successHandler(res.data.message);
        }).catch((error: any) => {
          if (error.message === "canceled") {
            customHandler("upload canceled");
          } else {
            errorHandler(error);
          }
        });
    },
  });

  const publishScript = () => setPublish(true);
  const updateScriptFunc = () => setPublish(false);

  const handleUploadAdaptionPermission = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    controllerAdaption = new AbortController();
    if (!e.target.files) {
      customHandler("please upload file adaption permission");
      setAdaptionPermissionError("please upload file adaption permission");
      setAdaption(false);
    } else if (e.target.files.length <= 0) {
      customHandler("please upload file adaption permission");
      setAdaptionPermissionError("please upload file adaption permission");
      setAdaption(false);
    } else if (e.target.files[0].size / 1024 > 5120) {
      customHandler("The file is to large, must less than 5MB");
      setAdaptionPermissionError("The file is to large, must less than 5MB");
      setAdaption(false);
    } else {
      setAdaptionPermissionError("");
      axiosPrivate
        .post(
          `/script/adaption/${script._id}`,
          { adaption: e.target.files[0] },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percentage = (loaded * 100) / total;
              setProgressAdaption(percentage);
            },
            signal: controllerAdaption.signal,
          }
        )
        .then((res) => successHandler(res.data.message));
    }
  };

  const cancelUpload = () => {
    controller.abort();
    setProgress(0);
  };

  const cancelUploadAdaption = () => {
    setAdaption(false);
    controllerAdaption.abort();
    setProgressAdaption(0);
    customHandler("upload canceled");
  };
  const handlerUploadAdaption = () => {
    setAdaption(true);
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
        }
        setOpenSaveProgressModal(true);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoadingUpdateButton(false);
      }
    }
    refetch();
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
    cancelUpload,
    handleUploadAdaptionPermission,
    adaptionPermissionError,
    progressAdaption,
    cancelUploadAdaption,
    dropZoneUploadPdfScript,
    dropZoneUploadPdfCopyright,
    dropZoneUploadImage,
    progressCopyright,
    progressScript,
    handlerUploadAdaption,
    updateDataAfterBlurInput
  };
};

export default useAbstract;
