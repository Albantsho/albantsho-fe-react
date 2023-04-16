import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ListItemText,
  MenuItem,
  Skeleton,
  Tab,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import customHandler from "utils/custom-handler";
import errorHandler from "utils/error-handler";
import Editor from "../Editor/Editor";

const controller = new AbortController();

const AiWriteStory = () => {
  const [story, setStory] = useState("");
  const [value, setValue] = useState("1");
  const [count, setCount] = useState("1");
  const [paragraph, setParagraph] = useState("1");
  const [titleStory, setTitleStory] = useState("");
  const [characterStory, setCharacterStory] = useState("");
  const [suggestResponse, setSuggestResponse] = useState("");
  const [question, setQuestion] = useState("CompleteStory");
  const { questionFromAi } = useAiApi(controller);

  const { isLoading: loadingCompleteStory, mutate: mutateCompleteStory } =
    useMutation(
      () =>
        questionFromAi({
          question: `Complete this story in ${paragraph} paragraph : ${story}`,
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
          question: `Please Suggest ${count} titles for this story : ${
            suggestResponse ? suggestResponse : story
          }`,
        }),
      {
        onSuccess: (data) => {
          setTitleStory(data.response);
          setValue("2");
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const { isLoading: loadingAddDetails, mutate: mutateAddDetails } =
    useMutation(
      () =>
        questionFromAi({
          question: `Add details to this story : ${
            suggestResponse ? suggestResponse : story
          }`,
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

  const { isLoading: loadingConvertToScript, mutate: mutateConvertToScript } =
    useMutation(
      () =>
        questionFromAi({
          question: `Convert this story to script : ${
            suggestResponse ? suggestResponse : story
          }`,
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

  const { isLoading: loadingSuggestCharacter, mutate: mutateSuggestCharacter } =
    useMutation(
      () =>
        questionFromAi({
          question: `Please Suggest ${count} characters for this story : ${
            suggestResponse ? suggestResponse : story
          }`,
        }),
      {
        onSuccess: (data) => {
          setCharacterStory(data.response);
          setValue("2");
        },
        onError: (error) => {
          errorHandler(error);
        },
      }
    );

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setStory(e.target.value);

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

  const handleChangeParagraph = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setParagraph(event.target.value);
  };

  const handleChangeQuestion = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuestion(event.target.value);
  };

  const handleSendQuestionToAi = () => {
    if (story.length < 5) {
      customHandler("please type more than about you want.");
      return;
    }
    if (question === "CompleteStory") {
      mutateCompleteStory();
    } else if (question === "SuggestTitle") {
      mutateSuggestTitles();
    } else if (question === "AddDetail") {
      mutateAddDetails();
    } else if (question === "ConvertScript") {
      mutateConvertToScript();
    } else {
      mutateSuggestCharacter();
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
          {loadingCompleteStory ||
          loadingSuggestTitles ||
          loadingAddDetails ||
          loadingSuggestCharacter ||
          loadingConvertToScript ? (
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

          <div className="flex flex-wrap items-end gap-4 justify-between">
            <div className="max-w-[225px] mt-4 sm:mt-8">
              <label
                className="futura font-medium text-primary-700 text-sm"
                htmlFor="cast-story-primary"
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
                id="cast-story-primary"
              >
                <MenuItem value="CompleteStory">
                  <ListItemText className="text-primary-700">
                    Complete Story
                  </ListItemText>
                </MenuItem>
                <MenuItem value="SuggestTitle">
                  <ListItemText className="text-primary-700">
                    Suggest Title
                  </ListItemText>
                </MenuItem>
                <MenuItem value="SuggestCharacter">
                  <ListItemText className="text-primary-700">
                    Suggest Character
                  </ListItemText>
                </MenuItem>
                <MenuItem value="AddDetail">
                  <ListItemText className="text-primary-700">
                    Add Detail
                  </ListItemText>
                </MenuItem>
                <MenuItem value="ConvertScript">
                  <ListItemText className="text-primary-700">
                    Convert Script
                  </ListItemText>
                </MenuItem>
              </CustomInput>
            </div>
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
                    <ListItemText className="text-primary-700">
                      {i + 1}
                    </ListItemText>
                  </MenuItem>
                ))}
              </CustomInput>
            </div>
            {(question === "SuggestTitle" ||
              question === "SuggestCharacter") && (
              <div className="max-w-[225px] mt-4">
                <label
                  className="futura leading-3 font-medium text-primary-700 text-sm"
                  htmlFor="cast-story-primary"
                >
                  select the desired number of{" "}
                  {question === "SuggestTitle" ? "titles" : "characters"} in the
                  input blow.
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
                  id="cast-story-primary"
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
          </div>

          <Btn
            loading={
              loadingCompleteStory ||
              loadingSuggestTitles ||
              loadingAddDetails ||
              loadingConvertToScript ||
              loadingSuggestCharacter
            }
            className="px-4 py-2 mt-4 lg:px-6 lg:py-3"
            onClick={handleSendQuestionToAi}
          >
            Enter
          </Btn>
        </TabPanel>
        <TabPanel sx={{ padding: 0 }} value="2">
          <label>titles</label>
          <textarea
            contentEditable={false}
            rows={1}
            value={titleStory}
            className="resize-none mb-8 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
          />
          <label>characters</label>
          <textarea
            contentEditable={false}
            rows={1}
            value={characterStory}
            className="resize-none mb-8 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
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

export default AiWriteStory;
