import { Typography } from "@mui/material";
import { IFullInformationScript } from "interfaces/script";
import { CustomElement } from "interfaces/slate";
import Link from "next/link";
import routes from "routes/routes";
import TextEditorList from "./TextEditor/TextEditorList";

interface IProps {
  script: IFullInformationScript;
  setTextEditorValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  initialValue: CustomElement[];
}

const ScriptEditor = ({ script, setTextEditorValue, initialValue }: IProps) => {
  return (
    <div className="w-full flex gap-1 flex-col justify-start text-center mx-auto max-w-[800px] px-3 xl:px-10">
      <Link href={routes.titleScript.dynamicUrl("2")}>
        <div className="bg-white w-full mx-auto py-14">
          <Typography
            variant="h6"
            component="p"
            className="text-center text-black courier"
          >
            {script.title}
          </Typography>
        </div>
      </Link>
      <TextEditorList
        initialValue={initialValue}
        setTextEditorValue={setTextEditorValue}
      />
    </div>
  );
};

export default ScriptEditor;
