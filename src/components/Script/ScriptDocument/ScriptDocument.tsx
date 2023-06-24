import { Avatar, ButtonGroup, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import type { IFullInformationScript } from "interfaces/script";
import useUserStore from "store/user.store";
import useScriptDocument from "./useScriptDocument";

interface IProps {
  script: IFullInformationScript;
}

const ScriptDocument = ({ script }: IProps) => {
  const { activeButton, openInfoCollaborator, openListCollaborator } =
    useScriptDocument();
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Typography
        variant="h5"
        color="primary.main"
        className="futura font-semibold leading-normal"
      >
        Document Setting
      </Typography>
      <ButtonGroup className="w-full flex mt-4 md:mt-7 mb-4 md:mb-7 rounded-md">
        <Btn
          onClick={openInfoCollaborator}
          sx={{ "&.MuiButtonBase-root": { width: "100%" } }}
          className={`${
            activeButton === 0
              ? "bg-primary-700 text-white"
              : "border-none bg-white text-gray-400"
          } ${
            activeButton === 1 && "text-gray-400"
          }w-1/2 py-2  font-medium futura text-base`}
        >
          Info
        </Btn>
        <Btn
          onClick={openListCollaborator}
          sx={{ "&.MuiButtonBase-root": { width: "100%" } }}
          className={`${
            activeButton === 1
              ? "bg-primary-700 text-white"
              : "border-none bg-white"
          } ${
            activeButton === 0 && "text-gray-400"
          } w-1/2 py-2   border-none  font-medium futura text-base`}
        >
          Owner
        </Btn>
      </ButtonGroup>
      {activeButton === 0 && (
        <>
          <Typography className="futura font-medium mb-1">Title</Typography>
          <div className="p-2 border border-gray-300 rounded-lg">
            <Typography className="leading-normal">{script.title}</Typography>
          </div>
          <Typography className="futura font-medium mt-2 mb-1">
            Tagline
          </Typography>
          <div className="p-2 border border-gray-300 rounded-lg">
            <Typography className="leading-normal">{script.tagline}</Typography>
          </div>
        </>
      )}
      {activeButton === 1 && (
        <>
          <div className="border border-gray-400 rounded-lg py-[10px] px-4 flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <Avatar
                className="w-8 h-8"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user.image}`}
                alt={user.firstName}
              />
              <Typography className="futura font-medium">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
            </div>
            <Typography className="futura text-[#5D5FEF] font-medium">
              owner
            </Typography>
          </div>
        </>
      )}
    </>
  );
};

export default ScriptDocument;
