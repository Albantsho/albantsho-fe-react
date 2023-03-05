import { IconButton, Popover, SvgIcon, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import AddCollaboratorIcon from "./assets/add-collaborator.svg";
import useAddCollaborator from "./useAddCollaborator";

interface IProps {
  refetch: any;
}

const AddCollaborator = ({ refetch }: IProps) => {
  const {
    handleCloseAddCollaborator,
    handleOpenAddCollaborator,
    openAddCollaborator,
    anchorEl,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
  } = useAddCollaborator({ refetch });

  return (
    <>
      <IconButton
        onClick={handleOpenAddCollaborator}
        color="success"
        className="ml-auto bg-success-50 w-12 h-12 p-2 self-center mt-1"
      >
        <SvgIcon inheritViewBox component={AddCollaboratorIcon} className="" />
      </IconButton>
      <Popover
        PaperProps={{
          className: "p-7 w-full max-w-sm relative overflow-visible",
        }}
        open={openAddCollaborator}
        anchorEl={anchorEl}
        onClose={handleCloseAddCollaborator}
        className="top-7"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          className="bg-white w-10 h-10 absolute -top-4 right-0"
        ></div>
        <Typography className="futura font-semibold text-primary-700">
          Add Collaborator
        </Typography>
        <form
          className="flex flex-col items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email")}
            placeholder="Email Address"
            type="text"
            className="outline-none py-3 px-4 bg-tinted-50/25 w-full mt-3 rounded-md placeholder:text-tinted-200"
          />
          {errors.email?.message && (
            <span className="text-error-700 text-base">
              {errors.email.message}
            </span>
          )}
          <Btn
            loading={loading}
            type="submit"
            className="mt-4 font-semibold py-2 px-8"
          >
            Invite
          </Btn>
        </form>
      </Popover>
    </>
  );
};

export default AddCollaborator;
