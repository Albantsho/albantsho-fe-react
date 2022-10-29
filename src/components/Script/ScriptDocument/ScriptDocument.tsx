import { Avatar, ButtonGroup, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { useState } from "react";

const ScriptDocument = () => {
  const [activeButton, setActiveButton] = useState(0);
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
          onClick={() => {
            setActiveButton(0);
          }}
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
          onClick={() => {
            setActiveButton(1);
          }}
          sx={{ "&.MuiButtonBase-root": { width: "100%" } }}
          className={`${
            activeButton === 1
              ? "bg-primary-700 text-white"
              : "border-none bg-white"
          } ${
            activeButton === 0 && "text-gray-400"
          } w-1/2 py-2   border-none  font-medium futura text-base`}
        >
          Collaborators
        </Btn>
      </ButtonGroup>
      {activeButton === 0 && (
        <>
          <Typography className="futura font-medium">Title</Typography>
          <CustomInput variant="outlined" fullWidth />
          <Typography className="futura font-medium">Tagline</Typography>
          <CustomInput variant="outlined" fullWidth />
        </>
      )}
      {activeButton === 1 && (
        <>
          <div className="border border-gray-400 rounded-lg py-[10px] px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">J</Avatar>
              <Typography className="futura font-medium">Jane Mawe</Typography>
            </div>
            <Typography className="futura text-[#5D5FEF] font-medium">
              owner
            </Typography>
          </div>
          <Divider className="my-8" />
          <Typography className="futura font-medium mb-1 text-primary-700">
            Add Collaborator
          </Typography>
          <CustomInput
            sx={{
              "& .MuiOutlinedInput-input": {
                py: 1.5,
                minWidth: "50px",
              },
            }}
            variant="outlined"
            fullWidth
            placeholder="Email Address"
          />

          <Btn className="mt-4 py-3 px-6">Invite</Btn>
        </>
      )}
    </>
  );
};

export default ScriptDocument;
