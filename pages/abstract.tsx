import { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import DashboardNav from "@shared/Layouts/DashboardLayout/DashboardNav/DashboardNav";
import { useRouter } from "next/router";
import GeneralScriptProfile from "components/Abstract/GeneralScriptProfile/GeneralScriptProfile";
import StoryLine from "components/Abstract/StoryLine/StoryLine";
import StoryStructure from "components/Abstract/StoryStructure/StoryStructure";
import CharacterBible from "components/Abstract/CharacterBible/CharacterBible";
import WritersStatement from "components/Abstract/WritersStatement/WritersStatement";
import UploadScript from "components/Abstract/UploadScript/UploadScript";
import UploadScriptFiles from "components/Abstract/UploadScriptFiles/UploadScriptFiles";
import UploadImage from "components/Abstract/UploadImage/UploadImage";
import LineSteps from "components/Abstract/LineSteps/LineSteps";
import ButtonsSteps from "components/Abstract/ButtonsSteps/ButtonsSteps";
import dynamic from "next/dynamic";

const SaveProgressScriptModal = dynamic(
  () =>
    import(
      "components/Abstract/SaveProgressScriptModal/SaveProgressScriptModal"
    )
);

const Abstract = () => {
  const [step, setStep] = useState(1);
  const [openSaveProgressModal, setOpenSaveProgressModal] = useState(false);
  const [activeButton, setActiveButton] = useState<number>(0);

  const { query } = useRouter();

  useEffect(() => {
    {
      query.step ? setStep(Number(query.step)) : setStep(1);
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Abstract</title>
      </Head>
      <DashboardNav color="inherit" position="static" />
      <Suspense fallback={null}>
        <SaveProgressScriptModal
          openSaveProgressModal={openSaveProgressModal}
          setOpenSaveProgressModal={setOpenSaveProgressModal}
        />
      </Suspense>

      <div className="px-5 sm:px-10 py-10 md:py-20 bg-gray-50">
        <div className="relative px-5 py-8 xl:py-16 sm:px-8 md:px-16 bg-white rounded-md shadow-secondary max-w-[700px] mx-auto">
          <LineSteps step={step} />
          {(Number(query.step) === 1 || !query.step) && (
            <GeneralScriptProfile />
          )}
          {Number(query.step) === 2 && <StoryLine />}
          {Number(query.step) === 3 && <StoryStructure />}
          {Number(query.step) === 4 && <CharacterBible />}
          {Number(query.step) === 5 && <WritersStatement />}
          {Number(query.step) === 6 && activeButton === 0 && (
            <UploadScript
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          )}
          {Number(query.step) === 6 && activeButton === 1 && (
            <UploadScriptFiles
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          )}
          {Number(query.step) === 7 && <UploadImage />}
          <ButtonsSteps
            setOpenSaveProgressModal={setOpenSaveProgressModal}
            step={step}
            setStep={setStep}
          />
        </div>
      </div>
    </>
  );
};

export default Abstract;
