import { Typography } from "@mui/material";
import TextEditorList from "./TextEditor/TextEditorList";

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ScriptEditor = ({ setTextEditorValue }: IProps) => {
  return (
    <div className="w-full flex flex-col mx-auto xl:max-w-4xl">
      <div className="bg-white w-full max-w-3xl mx-auto py-14">
        <Typography className="text-center futura font-bold">
          LONG MAN OF LONG BEACH
        </Typography>
      </div>
      <TextEditorList setTextEditorValue={setTextEditorValue} />
    </div>
  );
};

export default ScriptEditor;
