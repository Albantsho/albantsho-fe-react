import { ListItemText, MenuItem, Skeleton, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import customHandler from "utils/custom-handler";
import errorHandler from "utils/error-handler";
import Editor from "../Editor/Editor";
import Title from "../Title/Title";

const controller = new AbortController();

const AiWriteStory = () => {
  const [story, setStory] = useState("");
  const [paragraph, setParagraph] = useState("10");
  const [count, setCount] = useState("1");
  const [titleStory, setTitleStory] = useState("");
  const [suggestCharacters, setSuggestCharacters] = useState("");
  const {
    selectTitleForScript,
    addDetailToStory,
    completeStory,
    convertStoryToScript,
    questionFromAi,
  } = useAiApi(controller);

  const { mutate: mutateCompleteStory, isLoading: loadingCompleteStory } =
    useMutation(() => completeStory({ story, paragraph: Number(paragraph) }), {
      onSuccess(data) {
        setStory(data.response);
        console.log(data);
      },
      onError(error) {
        errorHandler(error);
      },
    });

  const {
    mutate: mutateSetTitleForScript,
    isLoading: loadingSetTitleForStory,
  } = useMutation(() => selectTitleForScript({ script: story }), {
    onSuccess(data) {
      setTitleStory(data.response);
    },
    onError(error) {
      errorHandler(error);
    },
  });

  const { mutate: mutateQuestionFromAi, isLoading: loadingQuestionFromAi } =
    useMutation(
      () =>
        questionFromAi({
          question: `Please Suggest ${count} characters for this story : ${story}`,
        }),
      {
        onSuccess(data) {
          setSuggestCharacters(data.response);
        },
        onError(error) {
          errorHandler(error);
        },
      }
    );

  const { mutate: mutateAddDetailToStory, isLoading: loadingAddDetailToStory } =
    useMutation(
      () => addDetailToStory({ paragraph: Number(paragraph), story }),
      {
        onSuccess(data) {
          setStory(data.response);
        },
        onError(error) {
          errorHandler(error);
        },
      }
    );

  const {
    mutate: mutateConvertStoryToScript,
    isLoading: loadingConvertStoryToScript,
  } = useMutation(() => convertStoryToScript({ story }), {
    onSuccess(data) {
      setStory(data.response);
    },
    onError(error) {
      errorHandler(error);
    },
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setStory(e.target.value);

  const handleChangeCountCharacter = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCount(event.target.value);
  };

  const setTitleHandler = () => {
    if (story.length < 5) {
      customHandler("Please type more than about you want.");
    } else {
      mutateSetTitleForScript();
    }
  };

  const completeScriptHandler = () => {
    if (story.length < 5) {
      customHandler("Please type more than about you want.");
    } else if (Number(paragraph) < 1) {
      customHandler("Please select number of paragraph.");
    } else {
      mutateCompleteStory();
    }
  };

  const addDetailToStoryHandler = () => {
    if (story.length < 5) {
      customHandler("Please type more than about you want.");
    } else if (Number(paragraph) < 1) {
      customHandler("Please select number of paragraph.");
    } else {
      mutateAddDetailToStory();
    }
  };

  const convertStoryToScriptHandler = () => {
    if (story.length < 5) {
      customHandler("Please type more than about you want.");
    } else if (Number(paragraph) < 1) {
      customHandler("Please select number of paragraph.");
    } else {
      mutateConvertStoryToScript();
    }
  };

  return (
    <>
      <Title title={titleStory} />
      {loadingSetTitleForStory ||
      loadingCompleteStory ||
      loadingAddDetailToStory ||
      loadingConvertStoryToScript ? (
        <Skeleton
          variant="rectangular"
          className="min-h-[50vh] lg:min-h-[51.5vh]"
        />
      ) : (
        <Editor handleChangeValue={handleChangeValue} value={story} />
      )}

      <div className="flex items-end gap-2">
        <div className="max-w-[215px]">
          <label
            className="futura font-medium text-primary-700 text-sm"
            htmlFor="cast-script-primary"
          >
            Number of suggest character for story
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
            onChange={handleChangeCountCharacter}
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
        <Btn
          loading={loadingQuestionFromAi}
          onClick={() => mutateQuestionFromAi()}
          className="px-3 py-4"
        >
          suggest {count} character
        </Btn>
      </div>
      {suggestCharacters && (
        <textarea
          contentEditable={false}
          rows={1}
          value={suggestCharacters}
          className="resize-none cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
        />
      )}
      <div className="flex gap-3 items-center">
        <CustomInput
          autoComplete="one-time-code"
          value={paragraph}
          variant="outlined"
          type="tel"
          onChange={(event) => {
            const result = event.target.value.replace(/\D/g, "");
            setParagraph(result);
          }}
          sx={{
            input: {
              width: { xs: 58 },
              height: { xs: 58 },
              boxSizing: "border-box",
              textAlign: "center",
            },
            minWidth: { xs: 58 },
          }}
          inputProps={{
            min: 0,
            maxLength: 3,
          }}
        />
        <Typography className="max-w-xs" variant="body2">
          You can selecting the desired number of paragraphs in the input
          opposite.
        </Typography>
      </div>

      <div className="flex gap-3">
        <Btn
          loading={loadingCompleteStory}
          onClick={completeScriptHandler}
          className="px-4 min-w-[151px] py-2 lg:px-6 lg:py-3"
        >
          Complete Story
        </Btn>
        <Btn
          loading={loadingSetTitleForStory}
          onClick={setTitleHandler}
          className="px-4 min-w-[106px] py-2 lg:px-6 lg:py-3"
        >
          Set Title
        </Btn>
      </div>
      <div className="flex gap-3">
        <Btn
          loading={loadingConvertStoryToScript}
          onClick={convertStoryToScriptHandler}
          className="px-4 py-2 lg:px-6 lg:py-3"
        >
          Convert To Script
        </Btn>
        <Btn
          loading={loadingAddDetailToStory}
          onClick={addDetailToStoryHandler}
          className="px-4 py-2 lg:px-6 lg:py-3"
        >
          Add Detail
        </Btn>
      </div>
    </>
  );
};

export default AiWriteStory;
