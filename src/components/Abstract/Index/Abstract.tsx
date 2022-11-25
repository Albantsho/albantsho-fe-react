import dynamic from "next/dynamic";
import { useRouter } from "next/router";
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
  const { query } = useRouter();
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
  } = useAbstract();

  return (
    <div className="relative px-5 py-8 xl:py-16 sm:px-8 md:px-16 bg-white rounded-md shadow-secondary max-w-[700px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepsLines step={step} />
        {(Number(query.step) === 1 || !query.step) && (
          <GeneralScriptProfile
            control={control}
            register={register}
            errors={errors}
          />
        )}
        {Number(query.step) === 2 && (
          <StoryLine register={register} errors={errors} />
        )}
        {Number(query.step) === 3 && (
          <StoryStructure register={register} errors={errors} />
        )}
        {Number(query.step) === 4 && (
          <CharacterBible register={register} errors={errors} />
        )}
        {Number(query.step) === 5 && (
          <WritersStatement register={register} errors={errors} />
        )}
        {Number(query.step) === 6 && activeButton === 0 && (
          <UploadScript
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            register={register}
            errors={errors}
          />
        )}
        {Number(query.step) === 6 && activeButton === 1 && (
          <UploadScriptFiles
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            register={register}
            errors={errors}
          />
        )}
        {Number(query.step) === 7 && (
          <UploadImage register={register} errors={errors} />
        )}
        <StepsButtons
          setOpenSaveProgressModal={setOpenSaveProgressModal}
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
