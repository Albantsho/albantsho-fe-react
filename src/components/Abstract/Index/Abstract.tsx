import { IFullInformationScript } from "interfaces/script";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import customHandler from "utils/custom-handler";
import CharacterBible from "../CharacterBible/CharacterBible";
import GeneralScriptProfile from "../GeneralScriptProfile/GeneralScriptProfile";
import StepsButtons from "../StepsButtons/StepsButtons";
import StepsLines from "../StepsLines/StepsLines";
import StoryLine from "../StoryLine/StoryLine";
import StoryStructure from "../StoryStructure/StoryStructure";
import UploadImage from "../UploadImage/UploadImage";
import UploadScript from "../UploadScript/UploadScript";
import UploadScriptFiles from "../UploadScriptFiles/UploadScriptFiles";
import WritersStatement from "../WritersStatement/WritersStatement";
import useAbstract from "./useAbstract";

const SaveProgressScriptModal = dynamic(
  () =>
    import(
      "components/Abstract/SaveProgressScriptModal/SaveProgressScriptModal"
    )
);

interface IProps {
  script: IFullInformationScript;
  refetch: any;
}

const Abstract = ({ script, refetch }: IProps) => {
  const {
    activeButton,
    openSaveProgressModal,
    setActiveButton,
    setOpenSaveProgressModal,
    step,
    setStep,
    errors,
    handleSubmit,
    register,
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
    adaptionPermissionError,
    cancelUploadAdaption,
    handleUploadAdaptionPermission,
    progressAdaption,
    dropZoneUploadPdfScript,
    dropZoneUploadPdfCopyright,
    progressCopyright,
    progressScript,
    dropZoneUploadImage,
  } = useAbstract(script, refetch);

  return (
    <div className="relative px-5 py-8 xl:py-16 sm:px-8 md:px-16 bg-white rounded-md shadow-secondary max-w-[700px] mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit, (e) => {
          const existedErrors = Object.keys(e);
          if (existedErrors.length) {
            customHandler(
              `You have some errors please check your inserted fields`
            );
          }
        })}
      >
        <StepsLines
          publish={publish}
          errors={errors}
          setStep={setStep}
          step={step}
        />
        <GeneralScriptProfile
          step={step}
          control={control}
          register={register}
          errors={errors}
          script={script}
        />
        <StoryLine
          script={script}
          step={step}
          register={register}
          errors={errors}
        />
        <StoryStructure
          script={script}
          step={step}
          register={register}
          errors={errors}
        />
        <CharacterBible
          script={script}
          step={step}
          register={register}
          errors={errors}
        />
        <WritersStatement
          adaption={adaption}
          getValues={getValues}
          script={script}
          step={step}
          register={register}
          errors={errors}
          adaptionPermissionError={adaptionPermissionError}
          cancelUploadAdaption={cancelUploadAdaption}
          handleUploadAdaptionPermission={handleUploadAdaptionPermission}
          progressAdaption={progressAdaption}
        />

        <UploadScript
          step={step}
          control={control}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          register={register}
          errors={errors}
          script={script}
        />

        <UploadScriptFiles
          dropZoneUploadPdfScript={dropZoneUploadPdfScript}
          dropZoneUploadPdfCopyright={dropZoneUploadPdfCopyright}
          step={step}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          progressCopyright={progressCopyright}
          progressScript={progressScript}
        />

        <UploadImage
          script={script}
          progress={progress}
          step={step}
          cancelUpload={cancelUpload}
          dropZoneUploadImage={dropZoneUploadImage}
        />
        <StepsButtons
          loadingPublishButton={loadingPublishButton}
          loadingUpdateButton={loadingUpdateButton}
          publishScript={publishScript}
          updateScript={updateScriptFunc}
          step={step}
          setStep={setStep}
        />

        <Suspense fallback={null}>
          {openSaveProgressModal ? (
            <SaveProgressScriptModal
              openSaveProgressModal={openSaveProgressModal}
              setOpenSaveProgressModal={setOpenSaveProgressModal}
            />
          ) : null}
        </Suspense>
      </form>
    </div>
  );
};

export default Abstract;
