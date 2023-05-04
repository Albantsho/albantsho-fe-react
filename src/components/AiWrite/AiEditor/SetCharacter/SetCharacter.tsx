import { Divider, ListItemText, MenuItem, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

interface IProps {
  setCharacter: React.Dispatch<React.SetStateAction<string>>;
  setSuggestResponse: React.Dispatch<React.SetStateAction<string>>;
  suggestResponse: string;
  increaseStep: () => void;
  title: string;
}

const SetCharacter = ({
  increaseStep,
  setCharacter,
  suggestResponse,
  title,
}: IProps) => {
  const [numberOfCharacter, setNumberOfCharacter] = useState("1");
  const { questionFromAi } = useAiApi();

  const {
    isLoading: loadingSuggestCharacters,
    mutate: mutateSuggestCharacters,
  } = useMutation(
    () =>
      questionFromAi({
        question: `Please Suggest ${numberOfCharacter} characters for this story : ${suggestResponse}`,
      }),
    {
      onSuccess: (data) => {
        setCharacter(data.response);
        increaseStep();
      },
      onError: (error) => {
        errorHandler(error);
      },
    }
  );

  const handleChangeNumberOfTitles = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setNumberOfCharacter(event.target.value);

  const handleSendQuestionToAi = () => mutateSuggestCharacters();

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Set Character
      </Typography>
      <Typography color="black" variant="body2">
        Choose a characters for your story.
      </Typography>
      <Divider className="my-4 bg-primary-main" />

      <label>titles</label>
      {loadingSuggestCharacters ? (
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

      {loadingSuggestCharacters ? (
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
          select the desired number of Characters in the input blow.
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
          value={numberOfCharacter}
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
        loading={loadingSuggestCharacters}
        className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
        onClick={handleSendQuestionToAi}
      >
        Enter
      </Btn>
    </div>
  );
};

export default SetCharacter;
