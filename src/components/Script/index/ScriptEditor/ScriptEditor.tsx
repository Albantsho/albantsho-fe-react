import { Typography } from "@mui/material";
import { IFullInformationScript } from "interfaces/script";
import { CustomElement } from "interfaces/slate";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "routes/routes";
import TextEditorList from "./TextEditor/TextEditorList";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface IProps {
  script: IFullInformationScript;
  setTextEditorValue: React.Dispatch<React.SetStateAction<string>>;
  initialValue: CustomElement[];
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  textEditorValueSave: React.MutableRefObject<string>;
}

const ScriptEditor = ({
  script,
  setTextEditorValue,
  initialValue,
  socket,
  textEditorValueSave,
}: IProps) => {
  const { query } = useRouter();

  return (
    <div className="w-full flex gap-1 flex-col justify-start text-center mx-auto max-w-[800px] px-3 xl:px-10">
      <Link href={routes.titleScript.dynamicUrl(query.id as string)}>
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
        socket={socket}
        initialValue={initialValue}
        setTextEditorValue={setTextEditorValue}
        textEditorValueSave={textEditorValueSave}
      />
    </div>
  );
};

export default ScriptEditor;
