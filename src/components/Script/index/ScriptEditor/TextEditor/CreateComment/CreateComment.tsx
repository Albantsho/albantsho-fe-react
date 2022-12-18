import {
  Avatar,
  TextField,
  Divider,
  InputAdornment,
  SvgIcon,
  IconButton,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";
import useCreateComment from "./useCreateComment";

interface IProps {
  positionX: number;
  positionY: number;
}

const CreateComment = ({ positionX, positionY }: IProps) => {
  const { errors, handleSubmit, onSubmit, register, showForm } =
    useCreateComment();

  return (
    <div
      className="w-[420px] flex items-start gap-5"
      style={{
        top: `${positionY}px`,
        left: `${positionX}px`,
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <div className="border-[6px] border-black rounded-full">
        <Avatar>OP</Avatar>
      </div>
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg max-w-[360px] w-full p-3 shadow-primary"
        >
          <TextField
            error={Boolean(errors.comment) || false}
            {...register("comment")}
            placeholder="Add comment"
            multiline
            minRows={2}
            sx={{
              "& fieldset": { border: "none" },
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "white",
                  textAlign: "center",
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.comment?.message}
          />
          <Divider className="my-2" />
          <TextField
            error={Boolean(errors.email) || false}
            {...register("email")}
            placeholder="@"
            sx={{
              "& fieldset": { border: "none" },
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "white",
                  textAlign: "center",
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.email?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" color="primary">
                    <SvgIcon
                      fontSize="small"
                      component={IoMdSend}
                      inheritViewBox
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      )}
    </div>
  );
};

export default CreateComment;
