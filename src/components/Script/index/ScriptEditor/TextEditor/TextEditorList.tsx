import BookMarkIcon from "@assets/icons/book-mark.svg";
import { ButtonGroup, IconButton, SvgIcon, Tooltip } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiFileUserLine, RiSave3Fill } from "react-icons/ri";
import { QueryClient, useMutation } from "react-query";
import { useResizeDetector } from "react-resize-detector";
import routes from "routes/routes";
import { Socket } from "socket.io-client";
import useScriptValueStore from "store/scriptValue.store";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import errorHandler from "utils/error-handler";
import { serializeWithoutDiv } from "utils/serialize-slate";
import successHandler from "utils/success-handler";
import TextEditor from "./TextEditor";
import TextEditorSettingModal from "./TextEditorSettingModal/TextEditorSettingModal";

interface IProps {
  htmlInitialValue: string;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const queryClient = new QueryClient();

const TextEditorList = ({ htmlInitialValue, socket }: IProps) => {
  const { ref, width } = useResizeDetector();
  const { query } = useRouter();
  const { saveFileDraft } = useDraftApi();
  const { updateScript } = useScriptsApi();
  const [render, setRender] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [editorSetting, setEditorSetting] = useState<{
    theme: string;
  }>({
    theme: "icons",
  });
  const scriptValue = useScriptValueStore((state) => state.scriptValue);

  const { mutate: saveDraftMutation, isLoading } = useMutation<
    IResData<object>,
    Error,
    { scriptId: string; payload: { content: string } }
  >((data) => saveFileDraft(data.scriptId, { content: data.payload.content }), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("draft");
      successHandler(data.message);
    },
    onError: (error) => errorHandler(error),
  });

  setTimeout(() => {
    setRender(true);
  }, 2000);

  useEffect(() => {
    const setting = JSON.parse(localStorage.getItem("EditorSetting") as string);
    if (setting) {
      setEditorSetting(setting);
    }
  }, []);

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
    saveDraftMutation({
      scriptId: query.id as string,
      payload: {
        content: scriptValue,
      },
    });
  };

  const openSettingModalFunc = () => setOpenSettingModal(true);
  const closeSettingModal = () => setOpenSettingModal(false);

  const handleChangeSettingIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditorSetting({ ...editorSetting, theme: e.target.value });
    localStorage.setItem(
      "EditorSetting",
      JSON.stringify({ theme: e.target.value })
    );
  };

  return (
    <>
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
              disabled={isLoading}
              disableRipple
              className="bg-white text-primary-700 rounded-none w-12 h-12"
            >
              <SvgIcon inheritViewBox component={RiSave3Fill} />
            </IconButton>
          </Tooltip>
          <Tooltip
            classes={{
              tooltip: "bg-black",
              tooltipPlacementLeft: "bg-black",
            }}
            title="Setting Editor"
            placement="left"
          >
            <IconButton
              onClick={openSettingModalFunc}
              disableRipple
              className="bg-white text-primary-700 rounded-none w-12 h-12"
            >
              <SvgIcon inheritViewBox component={AiOutlineSetting} />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
        {render && (
          <TextEditor
            editorSetting={editorSetting}
            socket={socket}
            htmlInitialValue={htmlInitialValue}
            width={width}
          />
        )}
      </div>
      {openSettingModal ? (
        <TextEditorSettingModal
          openSettingModal={openSettingModal}
          editorSetting={editorSetting}
          closeSettingModal={closeSettingModal}
          handleChangeSettingIcon={handleChangeSettingIcon}
        />
      ) : null}
    </>
  );
};

export default TextEditorList;
