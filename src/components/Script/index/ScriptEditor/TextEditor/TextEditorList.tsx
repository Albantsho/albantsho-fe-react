import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useDraftApi from "apis/Draft.api";
import useScriptValueStore from "app/scriptValue.store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiFileUserLine, RiSave3Fill } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import routes from "routes/routes";
import { Socket } from "socket.io-client";
import BookMarkIcon from "../assets/book-mark.svg";
import TextEditor from "./TextEditor";

interface IProps {
  htmlInitialValue: string;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const TextEditorList = ({ htmlInitialValue, socket }: IProps) => {
  const { ref, width } = useResizeDetector();
  const { query } = useRouter();
  const { saveFileDraft } = useDraftApi();
  const [render, setRender] = useState(false);
  const scriptValue = useScriptValueStore((state) => state.scriptValue);
  setTimeout(() => {
    setRender(true);
  }, 2000);

  const saveDraftFile = async () => {
    await saveFileDraft(query.id as string, { content: scriptValue });
  };

  return (
    <div ref={ref} className="relative text-start">
      <ButtonGroup className="absolute ml-auto hidden xl:flex w-min flex-col -right-16 top-10">
        <Tooltip
          classes={{
            tooltip: "bg-black",
            tooltipPlacementLeft: "bg-black",
          }}
          title="Act Structure"
          placement="left"
        >
          <IconButton
            disableRipple
            className="bg-white text-primary-700 rounded-none w-12 h-12"
          >
            <RiFileUserLine />
          </IconButton>
        </Tooltip>

        <Link
          passHref
          legacyBehavior
          href={routes.abstract.dynamicUrl(query.id as string)}
        >
          <Tooltip
            classes={{
              tooltip: "bg-black",
              tooltipPlacementLeft: "bg-black",
            }}
            title="Character Bible"
            placement="left"
          >
            <IconButton
              disableRipple
              className="bg-white text-primary-700 rounded-none w-12 h-12"
            >
              <SvgIcon inheritViewBox component={BookMarkIcon} />
            </IconButton>
          </Tooltip>
        </Link>

        <Tooltip
          classes={{
            tooltip: "bg-black",
            tooltipPlacementLeft: "bg-black",
          }}
          title="Save File"
          placement="left"
        >
          <IconButton
            onClick={saveDraftFile}
            disableRipple
            className="bg-white text-primary-700 rounded-none w-12 h-12"
          >
            <SvgIcon inheritViewBox component={RiSave3Fill} />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      {render && (
        <TextEditor
          socket={socket}
          htmlInitialValue={htmlInitialValue}
          width={width}
        />
      )}
    </div>
  );
};

export default TextEditorList;
