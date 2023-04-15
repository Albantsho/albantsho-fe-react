import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ListItemText, MenuItem, Tab } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import Editor from "../Editor/Editor";

const controller = new AbortController();

const AiWriteScript = () => {
  const [script, setScript] = useState("");
  const [value, setValue] = useState("1");
  const [count, setCount] = useState("1");
  const [titleScript, setTitleScript] = useState("");
  const [suggestResponse, setSuggestResponse] = useState("");
  const [question, setQuestion] = useState("CompleteScript");
  const { questionFromAi } = useAiApi(controller);

  const { isLoading: loadingCompleteScript, mutate: mutateCompleteScript } =
    useMutation(
      () =>
        questionFromAi({
          question: `Complete this story in ${count} paragraph${script}`,
        }),
      {
        onSuccess: (data) => {
          setSuggestResponse(data.response);
          setValue("2");
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const { isLoading: loadingSuggestTitles, mutate: mutateSuggestTitles } =
    useMutation(
      () =>
        questionFromAi({
          question: `Please Suggest ${count} titles for this script : ${script}`,
        }),
      {
        onSuccess: (data) => {
          setTitleScript(data.response);
          setValue("2");
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setScript(e.target.value);

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    setValue(value);
    setCount("1");
  };

  const handleChangeCount = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCount(event.target.value);
  };

  const handleChangeQuestion = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuestion(event.target.value);
  };

  const handleSendQuestionToAi = () => {
    if (question === "CompleteScript") {
      mutateCompleteScript();
    } else {
      mutateSuggestTitles();
    }
  };

  return (
    <>
      <TabContext value={value}>
        <div className="bg-white w-full mx-auto">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="1" label="Edit" />
            <Tab value="2" label="Result" />
          </TabList>
        </div>
        <TabPanel sx={{ padding: 0 }} value="1">
          {loadingCompleteScript || loadingSuggestTitles ? (
            <div className="min-h-[43vh] bg-white lg:min-h-[51.5vh] flex justify-center items-center">
              <SyncLoader color="#7953B5" />
            </div>
          ) : (
            <Editor
              placeholder="write your script..."
              handleChangeValue={handleChangeValue}
              value={script}
            />
          )}
          <div className="max-w-[225px] mt-4 sm:mt-8">
            <label
              className="futura font-medium text-primary-700 text-sm"
              htmlFor="cast-script-primary"
            >
              select the action you want.
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
              onChange={handleChangeQuestion}
              variant="outlined"
              value={question}
              id="cast-script-primary"
            >
              <MenuItem value="CompleteScript">
                <ListItemText className="text-primary-700">
                  Complete Script
                </ListItemText>
              </MenuItem>
              <MenuItem value="SuggestTitle">
                <ListItemText className="text-primary-700">
                  Suggest Title
                </ListItemText>
              </MenuItem>
            </CustomInput>
          </div>
          {question === "SuggestTitle" && (
            <div className="max-w-[225px] mt-4">
              <label
                className="futura leading-3 font-medium text-primary-700 text-sm"
                htmlFor="cast-script-primary"
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
                onChange={handleChangeCount}
                variant="outlined"
                value={count}
                id="cast-script-primary"
              >
                {Array.from(new Array(10)).map((_, i) => (
                  <MenuItem key={i} value={i + 1}>
                    <ListItemText className="text-primary-700">
                      {i + 1}
                    </ListItemText>
                  </MenuItem>
                ))}
              </CustomInput>
            </div>
          )}

          <Btn
            loading={loadingCompleteScript || loadingSuggestTitles}
            className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
            onClick={handleSendQuestionToAi}
          >
            Enter
          </Btn>
        </TabPanel>
        <TabPanel sx={{ padding: 0 }} value="2">
          <textarea
            contentEditable={false}
            rows={1}
            value={titleScript}
            className="resize-none mb-8 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[10vh]"
          />
          <textarea
            contentEditable={false}
            rows={1}
            value={suggestResponse}
            className="resize-none cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
          />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default AiWriteScript;
