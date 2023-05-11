import { Button } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { IComment } from "interfaces/comment";
import React, { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { Socket } from "socket.io-client";

interface IProps {
  comments: IComment[];
  id: string;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const FormComment = ({ comments, id, socket }: IProps) => {
  const [replyComment, setReplyComment] = useState(false);
  const allReplies = comments.filter((c) => c.parentId === id);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const handleReplayComment = () => setReplyComment((prevState) => !prevState);
  const onSubmit = (data: FieldValues) => {
    socket.emit("createComment", {
      message: data.replyComment,
      parentId: id,
    });
    resetField("replyComment");
    setReplyComment(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleReplayComment}
        disableRipple
        variant="text"
        className="my-4 text-gray-300"
      >
        {allReplies.length > 0 && allReplies.length}
        Reply
      </Button>
      {replyComment && (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-tinted-50 rounded-lg flex justify-between items-center "
          >
            <input
              {...register("replyComment", { required: true })}
              type="text"
              placeholder="Reply"
              className="bg-transparent outline-none placeholder:text-primary-700 px-4 min-h-[40px]"
            />
            <button
              className="p-0 w-fit mr-4 flex items-center cursor-pointer"
              type="submit"
            >
              <IoMdSend fontSize="16px" className="text-primary-700" />
            </button>
          </form>
          {errors.replyComment && (
            <span className="text-base text-error-700">
              Please writing your reply
            </span>
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default FormComment;
