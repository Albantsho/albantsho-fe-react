import { useState, useEffect } from "react";
import Head from "next/head";
import DashboardNav from "@shared/Layouts/DashboardLayout/Nav/DashboardNav";
import ModalSaveProgressScript from "components/Abstract/ModalSaveProgressScript/ModalSaveProgressScript";
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

const Abstract = () => {
  const [step, setStep] = useState(1);
  const [openModalSaveProgress, setOpenModalSaveProgress] = useState(false);
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
      <ModalSaveProgressScript
        openModalSaveProgress={openModalSaveProgress}
        setOpenModalSaveProgress={setOpenModalSaveProgress}
      />
      <div className="px-5 sm:px-10 py-10 md:py-20">
        <div className="relative px-5 py-8 xl:py-16 sm:px-8 md:px-16 rounded-md shadow-lg max-w-[700px] mx-auto">
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
            setOpenModalSaveProgress={setOpenModalSaveProgress}
            step={step}
            setStep={setStep}
          />
        </div>
      </div>
    </>
  );
};

export default Abstract;
