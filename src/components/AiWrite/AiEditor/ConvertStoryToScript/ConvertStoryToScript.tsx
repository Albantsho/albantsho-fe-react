import { Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import useAiApi from "apis/ai.api";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

interface IProps {
  setSuggestResponse: React.Dispatch<React.SetStateAction<string>>;
  suggestResponse: string;
  increaseStep: () => void;
  title: string;
  character: string;
}

const ConvertStoryToScript = ({
  increaseStep,
  suggestResponse,
  title,
  character,
  setSuggestResponse,
}: IProps) => {
  const { questionFromAi } = useAiApi();

  const {
    isLoading: loadingConvertStoryToScript,
    mutate: mutateConvertStoryToScript,
  } = useMutation(
    () =>
      questionFromAi({
        question: `Convert this story to script : ${suggestResponse}`,
      }),
    {
      onSuccess: (data) => {
        increaseStep();
        setSuggestResponse(data.response);
      },
      onError: (error) => {
        errorHandler(error);
      },
    }
  );

  const handleSendQuestionToAi = () => mutateConvertStoryToScript();

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Convert To Script
      </Typography>
      <Typography color="black" variant="body2">
        Turn the story you made into a script.
      </Typography>
      <Divider className="my-4 bg-primary-main" />

      <label>titles</label>
      {loadingConvertStoryToScript ? (
        <div className="min-h-[15vh] mb-4 bg-white flex justify-center items-center">
          <SyncLoader color="#7953B5" />
        </div>
      ) : (
        <textarea
          contentEditable={false}
          rows={1}
          value={title}
          className="resize-none mb-4 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
        />
      )}

      <label>characters</label>
      {loadingConvertStoryToScript ? (
        <div className="min-h-[15vh] mb-4 bg-white flex justify-center items-center">
          <SyncLoader color="#7953B5" />
        </div>
      ) : (
        <textarea
          contentEditable={false}
          rows={1}
          value={character}
          className="resize-none mb-4 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
        />
      )}

      {loadingConvertStoryToScript ? (
        <div className="min-h-[43vh] bg-white lg:min-h-[51.5vh] flex justify-center items-center">
          <SyncLoader color="#7953B5" />
        </div>
      ) : (
        <textarea
          contentEditable={false}
          rows={1}
          value={suggestResponse}
          className="resize-none cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
        />
      )}

      <Btn
        loading={loadingConvertStoryToScript}
        className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
        onClick={handleSendQuestionToAi}
      >
        Enter
      </Btn>
    </div>
  );
};

export default ConvertStoryToScript;
