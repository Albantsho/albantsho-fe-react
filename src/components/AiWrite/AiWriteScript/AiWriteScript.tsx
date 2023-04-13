import { Skeleton, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import customHandler from "utils/custom-handler";
import Editor from "../Editor/Editor";
import Title from "../Title/Title";

const controller = new AbortController();

const AiWriteScript = () => {
  const [script, setScript] = useState("");
  const [paragraph, setParagraph] = useState("10");
  const [titleScript, setTitleScript] = useState("");
  const { selectTitleForScript, completeScript } = useAiApi(controller);
  const { mutate: mutateCompleteScript, isLoading: loadingCompleteScript } =
    useMutation(
      () => completeScript({ script, paragraph: Number(paragraph) }),
      {
        onSuccess(data) {
          setScript(data.response);
        },
        onError(error) {
          errorHandler(error);
        },
      }
    );

  const {
    mutate: mutateSetTitleForScript,
    isLoading: loadingSetTitleForScript,
  } = useMutation(() => selectTitleForScript({ script }), {
    onSuccess(data) {
      setTitleScript(data.response);
    },
    onError(error) {
      errorHandler(error);
    },
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setScript(e.target.value);

  const setTitleHandler = () => {
    if (script.length < 5) {
      customHandler("Please type more than about you want.");
    } else {
      mutateSetTitleForScript();
    }
  };

  const completeScriptHandler = () => {
    if (script.length < 5) {
      customHandler("Please type more than about you want.");
    } else if (Number(paragraph) < 1) {
      customHandler("Please select number of paragraph.");
    } else {
      mutateCompleteScript();
    }
  };

  return (
    <>
      <Title title={titleScript} />
      {loadingSetTitleForScript || loadingCompleteScript ? (
        <Skeleton
          variant="rectangular"
          className="min-h-[50vh] lg:min-h-[51.5vh]"
        />
      ) : (
        <Editor handleChangeValue={handleChangeValue} value={script} />
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
          loading={loadingCompleteScript}
          onClick={completeScriptHandler}
          className="px-4 py-2 lg:px-6 lg:py-3"
        >
          Complete Script
        </Btn>
        <Btn
          loading={loadingSetTitleForScript}
          onClick={setTitleHandler}
          className="px-4 py-2 lg:px-6 lg:py-3"
        >
          Set Title
        </Btn>
      </div>
    </>
  );
};

export default AiWriteScript;
