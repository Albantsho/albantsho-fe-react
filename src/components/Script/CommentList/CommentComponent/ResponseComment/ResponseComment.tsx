import { Avatar, Typography } from "@mui/material";
import { IComment } from "interfaces/comment";
import React from "react";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket } from "socket.io-client";
import FormComment from "../FormComment/FormComment";
import { timeSince } from "utils/get-time";

interface IProps {
  comments: IComment[];
  parentId: string | null;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const ResponseComment = ({ comments, parentId, socket }: IProps) => {
  return (
    <>
      {comments.map((comment) => {
        const time = timeSince(new Date(comment.updatedAt).getTime());
        return (
          comment.parentId === parentId && (
            <div key={comment._id} className="ml-2 mt-4">
              <div className="flex gap-3 items-center">
                <Avatar
                  className="w-9 h-9"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${comment.user?.image}`}
                  alt={comment.user?.fullname}
                />
                <Typography
                  variant="h6"
                  color="primary.main"
                  className="font-normal futura"
                >
                  {comment.user?.fullname}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {time}
                </Typography>
              </div>
              <div className="pt-3 md:pt-5 px-4">
                <Typography variant="body2" className="mt-3 mb-4">
                  {comment.message}
                </Typography>
                <FormComment
                  comments={comments}
                  id={comment._id}
                  socket={socket}
                />
              </div>
              <ResponseComment
                socket={socket}
                comments={comments}
                parentId={comment._id}
              />
            </div>
          )
        );
      })}
    </>
  );
};

export default React.memo(ResponseComment);