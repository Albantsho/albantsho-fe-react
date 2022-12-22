import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";
import { CustomElement } from "interfaces/slate";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiFileUserLine } from "react-icons/ri";
import { useResizeDetector } from "react-resize-detector";
import routes from "routes/routes";
import BookMarkIcon from "../assets/book-mark.svg";
import TextEditor from "./TextEditor";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface IProps {
  setTextEditorValue: React.Dispatch<React.SetStateAction<string>>;
  textEditorValueSave: React.MutableRefObject<string>;
  initialValue: CustomElement[];
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const TextEditorList = ({
  setTextEditorValue,
  initialValue,
  socket,
  textEditorValueSave,
}: IProps) => {
  const { ref, width } = useResizeDetector();
  const { query } = useRouter();

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
      </ButtonGroup>
      <TextEditor
        socket={socket}
        initialValue={initialValue}
        width={width}
        setTextEditorValue={setTextEditorValue}
        textEditorValueSave={textEditorValueSave}
      />
    </div>
  );
};

export default TextEditorList;
