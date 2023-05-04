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

const AddDetailToStory = ({
  increaseStep,
  suggestResponse,
  title,
  character,
  setSuggestResponse,
}: IProps) => {
  const { questionFromAi } = useAiApi();

  const { isLoading: loadingAddDetailToStory, mutate: mutateAddDetailToStory } =
    useMutation(
      () =>
        questionFromAi({
          question: `Add details to this story : ${suggestResponse}`,
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

  const handleSendQuestionToAi = () => {
    mutateAddDetailToStory();
  };

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Add Detail
      </Typography>
      <Typography color="black" variant="body2">
        Expand your story and add the details you want to your story.
      </Typography>
      <Divider className="my-4 bg-primary-main" />

      <label>titles</label>
      {loadingAddDetailToStory ? (
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
      {loadingAddDetailToStory ? (
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

      {loadingAddDetailToStory ? (
        <div className="min-h-[43vh] mb-4 bg-white lg:min-h-[51.5vh] flex justify-center items-center">
          <SyncLoader color="#7953B5" />
        </div>
      ) : (
        <textarea
          contentEditable={false}
          rows={1}
          value={suggestResponse}
          className="resize-none mb-4 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
        />
      )}

      <Btn
        loading={loadingAddDetailToStory}
        className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
        onClick={handleSendQuestionToAi}
      >
        Enter
      </Btn>
    </div>
  );
};

export default AddDetailToStory;
