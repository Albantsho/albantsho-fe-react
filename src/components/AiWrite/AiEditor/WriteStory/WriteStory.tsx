import { Divider, ListItemText, MenuItem, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import Editor from "components/AiWrite/Editor/Editor";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import customHandler from "utils/custom-handler";
import errorHandler from "utils/error-handler";

interface IProps {
  setSuggestResponse: React.Dispatch<React.SetStateAction<string>>;
  increaseStep: () => void;
}

const WriteStory = ({ setSuggestResponse, increaseStep }: IProps) => {
  const [paragraph, setParagraph] = useState("1");
  const [story, setStory] = useState("");
  const { questionFromAi } = useAiApi();

  const { isLoading: loadingCompleteStory, mutate: mutateCompleteStory } =
    useMutation(
      () =>
        questionFromAi({
          question: `Complete this story in ${paragraph} paragraph : ${story}`,
        }),
      {
        onSuccess: (data) => {
          setSuggestResponse(data.response);
          increaseStep();
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const handleChangeParagraph = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setParagraph(event.target.value);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setStory(e.target.value);

  const handleSendQuestionToAi = () => {
    if (story.length < 5) {
      customHandler("please type more than about you want.");
      return;
    } else {
      mutateCompleteStory();
    }
  };

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Write Story
      </Typography>
      <Typography color="black" variant="body2">
        Write a part of your story and let openAi complete it for you.
      </Typography>
      <Divider className="my-4 bg-primary-main" />

      {loadingCompleteStory ? (
        <div className="min-h-[43vh] bg-white lg:min-h-[51.5vh] flex justify-center items-center">
          <SyncLoader color="#7953B5" />
        </div>
      ) : (
        <Editor
          placeholder="write your story..."
          handleChangeValue={handleChangeValue}
          value={story}
        />
      )}

      <div className="max-w-[225px] mt-4">
        <label
          className="futura leading-none font-medium text-primary-700 text-sm"
          htmlFor="cast-story-primary"
        >
          select the desired number of paragraphs in the input blow.
        </label>
        <CustomInput
          select
          fullWidth
          SelectProps={{ MenuProps: { className: "max-h-[250px]" } }}
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": {
              py: 1.5,
              minWidth: "135px",
            },
            "& .MuiSvgIcon-root": { color: "#7953B5" },
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
              maxWidth: "240px",
            },
          }}
          className=""
          onChange={handleChangeParagraph}
          variant="outlined"
          value={paragraph}
          id="cast-story-primary"
        >
          {Array.from(new Array(10)).map((_, i) => (
            <MenuItem key={i} value={i + 1}>
              <ListItemText className="text-primary-700">{i + 1}</ListItemText>
            </MenuItem>
          ))}
        </CustomInput>
      </div>
      <Btn
        loading={loadingCompleteStory}
        className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
        onClick={handleSendQuestionToAi}
      >
        Enter
      </Btn>
    </div>
  );
};

export default WriteStory;
