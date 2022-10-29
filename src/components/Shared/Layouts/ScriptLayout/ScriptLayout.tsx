import { Avatar, SvgIcon, Typography } from "@mui/material";
import ScriptSidebarOnDesktop from "./ScriptList/ScriptSidebarOnDesktop/ScriptSidebarOnDesktop";
import ScriptSidebarOnMobile from "./ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import ScriptNav from "./ScriptNav/ScriptNav";
import useScriptLayout from "./useScriptLayout";
import PhotoIcon from "./assets/photo.svg";
import TickIcon from "./assets/tick.svg";
import Btn from "@shared/Btn/Btn";

interface IProps {
  children: React.ReactNode;
}

const ScriptLayout = ({ children }: IProps) => {
  const { openInformationTab, handleOpenCompleteDrawer, openCompleteDrawer } =
    useScriptLayout();
  return (
    <main className="flex bg-[#f6f8fc]  relative ">
      <ScriptSidebarOnDesktop
        handleOpenCompleteDrawer={handleOpenCompleteDrawer}
        openCompleteDrawer={openCompleteDrawer}
      />

      <div className="flex-1">
        <ScriptNav color="inherit" position="static" />
        <ScriptSidebarOnMobile />
        <div className="px-5 pt-3 flex-1  lg:px-0 max-w-screen-2xl flex lg:gap-7">
          {openInformationTab === 1 && (
            <div className="max-w-[360px] w-full bg-white pt-12 px-5 space-y-4 overflow-y-scroll h-screen">
              {Array.from(new Array(6)).map((_, i) => (
                <div key={i} className="border-b">
                  <div className="flex gap-4">
                    <SvgIcon component={PhotoIcon} inheritViewBox />
                    <Typography className="font-bold futura">
                      INT. WATER FRONT
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    className="text-gray-400 mt-3 mb-4"
                  >
                    It amet, consectetur adipiscing elit. Volutpat vitae orci
                    proin semper commodo a habitasse mollis. Magna pellentesque
                    dignissim aliquam duis id tincidunt metus
                  </Typography>
                </div>
              ))}
            </div>
          )}
          {openInformationTab === 2 && (
            <div className="max-w-[360px] w-full bg-white pt-12 px-5 space-y-4 overflow-y-scroll h-screen">
              {Array.from(new Array(6)).map((_, i) => (
                <div key={i} className="border-b">
                  <div className="flex gap-4 items-center">
                    <Avatar>N</Avatar>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      className="font-normal futura"
                    >
                      Jane Doe
                    </Typography>
                    <Typography variant="subtitle1" className="text-gray-400">
                      5min ago
                    </Typography>
                    <SvgIcon component={TickIcon} inheritViewBox />
                  </div>
                  <Typography variant="body2" className="mt-3 mb-4">
                    It amet, consectetur adipiscing elit. Volutpat vitae orci
                    proin semper commodo a habitasse mollis. Magna pellentesque
                    dignissim aliquam duis id tincidunt metus
                  </Typography>
                  <Typography variant="body2" className="my-4 text-gray-300">
                    1 Reply
                  </Typography>
                </div>
              ))}
            </div>
          )}
          {openInformationTab === 3 && (
            <div className="max-w-[360px] w-full bg-white pt-12 px-5  overflow-y-scroll h-screen">
              <Typography
                variant="h5"
                color="primary.main"
                className="futura font-semibold leading-normal"
              >
                Export Document
              </Typography>
              <Typography className="max-w-[230px] mb-6">
                Document will be exported as a PDF file.
              </Typography>
              <Btn className="py-2 px-6">Export File</Btn>
            </div>
          )}
          {openInformationTab === 4 && (
            <div className="max-w-[360px] w-full bg-white pt-12 px-5  overflow-y-scroll h-screen">
              <Typography
                variant="h5"
                color="primary.main"
                className="futura font-semibold leading-normal"
              >
                Document Setting
              </Typography>
              <Typography className="max-w-[230px] mb-6">
                Document will be exported as a PDF file.
              </Typography>
              <Btn className="py-2 px-6">Export File</Btn>
            </div>
          )}
          {children}
        </div>
      </div>
    </main>
  );
};

export default ScriptLayout;
