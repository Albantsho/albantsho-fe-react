import { Divider, ListItemText, MenuItem, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

interface IProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSuggestResponse: React.Dispatch<React.SetStateAction<string>>;
  suggestResponse: string;
  increaseStep: () => void;
}

const SetTitle = ({ increaseStep, setTitle, suggestResponse }: IProps) => {
  const [numberOfTitles, setNumberOfTitles] = useState("1");
  const { questionFromAi } = useAiApi();

  const { isLoading: loadingSuggestTitles, mutate: mutateSuggestTitles } =
    useMutation(
      () =>
        questionFromAi({
          question: `Please Suggest ${numberOfTitles} titles for this story : ${suggestResponse}`,
        }),
      {
        onSuccess: (data) => {
          setTitle(data.response);
          increaseStep();
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const handleChangeNumberOfTitles = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setNumberOfTitles(event.target.value);

  const handleSendQuestionToAi = () => mutateSuggestTitles();

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Set Title
      </Typography>
      <Typography color="black" variant="body2">
        Choose a title for your story.
      </Typography>
      <Divider className="my-4 bg-primary-main" />

      {loadingSuggestTitles ? (
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

      <div className="max-w-[225px] mt-4">
        <label
          className="futura leading-none font-medium text-primary-700 text-sm"
          htmlFor="cast-story-primary"
        >
          select the desired number of titles in the input blow.
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
          onChange={handleChangeNumberOfTitles}
          variant="outlined"
          value={numberOfTitles}
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
        loading={loadingSuggestTitles}
        className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
        onClick={handleSendQuestionToAi}
      >
        Enter
      </Btn>
    </div>
  );
};

export default SetTitle;
