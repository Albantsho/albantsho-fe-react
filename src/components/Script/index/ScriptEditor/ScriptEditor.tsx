import { Typography } from "@mui/material";
import TextEditor from "./TextEditor/TextEditor";

const ScriptEditor = () => {
  return (
    <div className="w-full flex flex-col mx-auto max-w-4xl">
      <div className="bg-white w-full max-w-3xl  mx-auto py-14">
        <Typography className="text-center futura font-bold">
          LONG MAN OF LONG BEACH
        </Typography>
      </div>
      <TextEditor />
    </div>
  );
};

export default ScriptEditor;
