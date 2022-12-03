import { Typography } from "@mui/material";
import TextEditorList from "./TextEditor/TextEditorList";

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ScriptEditor = ({ setTextEditorValue }: IProps) => {
  return (
    <div className="w-full flex gap-1 flex-col justify-start mx-auto max-w-[800px] xl:px-10">
      <div className="bg-white w-full  mx-auto py-14">
        <Typography className="text-center futura font-bold">
          LONG MAN OF LONG BEACH
        </Typography>
      </div>
      <TextEditorList setTextEditorValue={setTextEditorValue} />
    </div>
  );
};

export default ScriptEditor;
