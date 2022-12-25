import { Divider } from "@mui/material";
import { IComment } from "interfaces/comment";
import React from "react";
import CommentComponent from "./CommentComponent/CommentComponent";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface IProps {
  commentList: IComment[];
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const CommentList = ({ commentList, socket }: IProps) => {
  return (
    <>
      {commentList
        .filter((comment) => !comment.parentId)
        .map((comment) => (
          <React.Fragment key={comment._id}>
            <CommentComponent
              socket={socket}
              commentList={commentList}
              comment={comment}
            />
            <Divider className="my-1" />
          </React.Fragment>
        ))}
    </>
  );
};

export default CommentList;
