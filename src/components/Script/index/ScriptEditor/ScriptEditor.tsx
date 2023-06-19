import { Typography } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { IFullInformationScript } from "interfaces/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { Socket } from "socket.io-client";
import routes from "utils/routes";
import TextEditorList from "./TextEditor/TextEditorList";

interface IProps {
  script: IFullInformationScript;
  htmlInitialValue: string;
}

const ScriptEditor = ({ script, htmlInitialValue }: IProps) => {
  const { query } = useRouter();

  return (
    <div className="w-full flex gap-3 flex-col justify-start text-center mx-auto max-w-[800px] px-3 xl:px-10">
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
      <TextEditorList htmlInitialValue={htmlInitialValue} />
    </div>
  );
};

export default ScriptEditor;
