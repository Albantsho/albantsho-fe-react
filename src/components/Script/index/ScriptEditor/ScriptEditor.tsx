import { Typography } from "@mui/material";
import Link from "next/link";
import routes from "routes/routes";
import TextEditorList from "./TextEditor/TextEditorList";

interface IProps {
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ScriptEditor = ({ setTextEditorValue }: IProps) => {
  return (
    <div className="w-full flex gap-1 flex-col justify-start text-center mx-auto max-w-[800px] px-3 xl:px-10">
      <Link href={routes.titleScript.dynamicUrl("2")}>
        <div className="bg-white w-full mx-auto py-14">
          <Typography
            variant="h6"
            component="p"
            className="text-center text-black courier"
          >
            LONG MAN OF LONG BEACH Q
          </Typography>
        </div>
      </Link>
      <TextEditorList setTextEditorValue={setTextEditorValue} />
    </div>
  );
};

export default ScriptEditor;
