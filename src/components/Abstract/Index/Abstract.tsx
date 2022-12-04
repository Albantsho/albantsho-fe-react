import dynamic from "next/dynamic";
import { Suspense } from "react";
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

const Abstract = () => {
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
  } = useAbstract();

  return (
    <div className="relative px-5 py-8 xl:py-16 sm:px-8 md:px-16 bg-white rounded-md shadow-secondary max-w-[700px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepsLines setStep={setStep} step={step} />
        <GeneralScriptProfile
          step={step}
          control={control}
          register={register}
          errors={errors}
        />
        <StoryLine step={step} register={register} errors={errors} />
        <StoryStructure step={step} register={register} errors={errors} />
        <CharacterBible step={step} register={register} errors={errors} />
        <WritersStatement step={step} register={register} errors={errors} />
        {activeButton === 0 && (
          <UploadScript
            step={step}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            register={register}
            errors={errors}
          />
        )}
        {activeButton === 1 && (
          <UploadScriptFiles
            step={step}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            register={register}
            errors={errors}
          />
        )}
        <UploadImage step={step} register={register} errors={errors} />
        <StepsButtons
          loadingPublishButton={loadingPublishButton}
          loadingUpdateButton={loadingUpdateButton}
          publishScript={publishScript}
          updateScript={updateScriptFunc}
          step={step}
          setStep={setStep}
        />
        <Suspense fallback={null}>
          <SaveProgressScriptModal
            openSaveProgressModal={openSaveProgressModal}
            setOpenSaveProgressModal={setOpenSaveProgressModal}
          />
        </Suspense>
      </form>
    </div>
  );
};

export default Abstract;
