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
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket } from "socket.io-client";
import { AiOutlineClose } from "react-icons/ai";
import useUserStore from "app/user.store";
import IconComment from "./assets/commentIcon.svg";
import { bgArray } from "assets/colors/color-list";

interface IProps {
  positionX: number;
  positionY: number;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  setShowFormStatus: boolean;
  elementWidth: number;
  cancelComment: (id: number) => () => void;
  id: number;
}

const CreateComment = ({
  positionX,
  positionY,
  socket,
  setShowFormStatus,
  elementWidth,
  cancelComment,
  id,
}: IProps) => {
  const { errors, handleSubmit, onSubmit, register, showForm } =
    useCreateComment({ socket, positionX, positionY, setShowFormStatus });
  const user = useUserStore((state) => state.user);

  return (
    <div
      className={`${
        positionX < 370 ? "flex-row" : "flex-row-reverse"
      } w-[360px] flex items-start gap-5`}
      style={{
        top: `${positionY}px`,
        left: `${positionX < 370 && positionX}px`,
        right: `${positionX > 370 && elementWidth - positionX}px`,
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <div className="w-fit relative">
        <SvgIcon
          component={IconComment}
          className="w-16 h-16"
          fontSize="large"
          inheritViewBox
        />
        <Avatar
          style={{ backgroundColor: bgArray[Math.floor(Math.random() * 14)] }}
          className="absolute top-2 left-3 w-11 h-11"
          alt={user.fullname}
        />
      </div>
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg max-w-[360px] w-full p-4 shadow-primary relative"
        >
          <IconButton
            onClick={cancelComment(id)}
            className="text-error-500 w-7 h-7 p-1 hover:bg-error-50 bg-error-50 absolute top-0 right-0"
          >
            <AiOutlineClose />
          </IconButton>
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
              className: "h-6",
              // inputProps: {
              //   style: { textAlign: "center" },
              // },
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
