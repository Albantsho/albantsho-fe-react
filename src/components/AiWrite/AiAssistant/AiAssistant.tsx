import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import useAiApi from "apis/ai.api";
import { useState } from "react";
import { useMutation } from "react-query";
import { SyncLoader } from "react-spinners";
import Editor from "../Editor/Editor";

// const controller = new AbortController();

const AiAssistant = () => {
  const [question, setQuestion] = useState("");
  const [suggestResponse, setSuggestResponse] = useState("");
  const [value, setValue] = useState("1");
  const { questionFromAi } = useAiApi();

  const { isLoading, mutate } = useMutation(
    () => questionFromAi({ question }),
    {
      onSuccess: (data) => {
        setSuggestResponse(data.response);
        setValue("2");
        setQuestion("");
      },
    }
  );

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    setValue(value);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setQuestion(e.target.value);

  return (
    <TabContext value={value}>
      <div className="bg-white w-full mx-auto">
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab value="1" label="Question" />
          <Tab value="2" label="Result" />
        </TabList>
      </div>
      <TabPanel sx={{ padding: 0 }} value="1">
        {isLoading ? (
          <div className="min-h-[43vh] bg-white lg:min-h-[51.5vh] flex justify-center items-center">
            <SyncLoader color="#7953B5" />
          </div>
        ) : (
          <Editor
            placeholder="Ask me every think you want."
            handleChangeValue={handleChangeValue}
            value={question}
          />
        )}

        <div className="flex mt-4 sm:mt-8 gap-3">
          <Btn
            loading={isLoading}
            onClick={() => mutate()}
            className="px-4 py-2 lg:px-6 lg:py-3"
          >
            Enter
          </Btn>
        </div>
      </TabPanel>
      <TabPanel sx={{ padding: 0 }} value="2">
        <textarea
          contentEditable={false}
          rows={1}
          value={suggestResponse}
          className="resize-none cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
        />
      </TabPanel>
    </TabContext>
  );
};

export default AiAssistant;
