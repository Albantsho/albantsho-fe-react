import { Avatar, ButtonGroup, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IFullInformationScript } from "interfaces/script";
import useScriptDocument from "./useScriptDocument";

interface IProps {
  script: IFullInformationScript;
}

const ScriptDocument = ({ script }: IProps) => {
  const {
    activeButton,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    openInfoCollaborator,
    openListCollaborator,
    register,
    collaboratorsList,
  } = useScriptDocument();

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
          Collaborators
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
          {collaboratorsList && (
            <>
              <div className="border border-gray-400 rounded-lg py-[10px] px-4 flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <Avatar
                    className="w-8 h-8"
                    src={collaboratorsList.author.image}
                    alt={collaboratorsList.author.fullname}
                  />
                  <Typography className="futura font-medium">
                    {collaboratorsList.author.fullname}
                  </Typography>
                </div>
                <Typography className="futura text-[#5D5FEF] font-medium">
                  owner
                </Typography>
              </div>
              {collaboratorsList.collaborators.map((collaborator) => (
                <div
                  key={collaborator._id}
                  className="border border-gray-400 rounded-lg py-[10px] px-4 flex justify-between items-center mb-2"
                >
                  <div className="flex items-center gap-3">
                    <Avatar
                      className="w-8 h-8"
                      src={collaborator.image}
                      alt={collaborator.fullname}
                    />
                    <Typography className="futura font-medium">
                      {collaborator.fullname}
                    </Typography>
                  </div>
                </div>
              ))}
            </>
          )}
          <Divider className="my-8" />
          <Typography className="futura font-medium mb-1 text-primary-700">
            Add Collaborator
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              {...register("email")}
              error={Boolean(errors.email) || false}
              sx={{
                "& .MuiOutlinedInput-input": {
                  py: 1.5,
                  minWidth: "50px",
                },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              variant="outlined"
              fullWidth
              placeholder="Email Address"
              helperText={errors.email?.message}
            />
            <Btn loading={loading} type="submit" className="mt-4 py-3 px-6">
              Invite
            </Btn>
          </form>
        </>
      )}
    </>
  );
};

export default ScriptDocument;
