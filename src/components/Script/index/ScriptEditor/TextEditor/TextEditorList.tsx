import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiFileUserLine, RiSave3Fill } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import { toast } from "react-toastify";
import routes from "routes/routes";
import { Socket } from "socket.io-client";
import useScriptValueStore from "store/scriptValue.store";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";
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
  const { updateScript } = useScriptsApi();
  const [render, setRender] = useState(false);
  const scriptValue = useScriptValueStore((state) => state.scriptValue);
  setTimeout(() => {
    setRender(true);
  }, 2000);

  const saveDraftFile = async () => {
    const htmlContent = new DOMParser().parseFromString(
      scriptValue,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    const valueForConvertPdf = serializeWithoutDiv({ children: value });
    await updateScript(
      { scriptPart: valueForConvertPdf?.slice(0, 3500) },
      query.id as string
    );
    const res = await saveFileDraft(query.id as string, {
      content: scriptValue,
    });
    toast.success(res.message);
  };

  return (
    <div ref={ref} className="relative text-start">
      <ButtonGroup
        className="absolute flex-row ml-auto  w-min xl:flex-col 
      -top-[10px] left-0 xl:-right-16 xl:top-10"
      >
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
