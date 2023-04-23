import { useState } from "react";
import AddDetailToStory from "./AddDetailToStory/AddDetailToStory";
import ConvertStoryToScript from "./ConvertStoryToScript/ConvertStoryToScript";
import CustomCircularProgress from "./CustomCircularProgress/CustomCircularProgress";
import FinallyScript from "./FinallyScript/FinallyScript";
import SetCharacter from "./SetCharacter/SetCharacter";
import SetTitle from "./SetTitle/SetTitle";
import WriteStory from "./WriteStory/WriteStory";

const AiEditor = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [character, setCharacter] = useState("");
  const [suggestResponse, setSuggestResponse] = useState("");

  const increaseStep = () => setStep((prev) => prev + 1);

  return (
    <div className="relative">
      <CustomCircularProgress
        progress={+Math.ceil((step / 6) * 100).toFixed(2)}
      />
      {step === 1 && (
        <WriteStory
          setSuggestResponse={setSuggestResponse}
          increaseStep={increaseStep}
        />
      )}
      {step === 2 && (
        <SetTitle
          suggestResponse={suggestResponse}
          setSuggestResponse={setSuggestResponse}
          setTitle={setTitle}
          increaseStep={increaseStep}
        />
      )}
      {step === 3 && (
        <SetCharacter
          suggestResponse={suggestResponse}
          setSuggestResponse={setSuggestResponse}
          title={title}
          setCharacter={setCharacter}
          increaseStep={increaseStep}
        />
      )}
      {step === 4 && (
        <AddDetailToStory
          suggestResponse={suggestResponse}
          setSuggestResponse={setSuggestResponse}
          title={title}
          increaseStep={increaseStep}
          character={character}
        />
      )}
      {step === 5 && (
        <ConvertStoryToScript
          suggestResponse={suggestResponse}
          setSuggestResponse={setSuggestResponse}
          title={title}
          increaseStep={increaseStep}
          character={character}
        />
      )}
      {step === 6 && (
        <FinallyScript
          suggestResponse={suggestResponse}
          title={title}
          character={character}
        />
      )}
    </div>
  );
};

export default AiEditor;
