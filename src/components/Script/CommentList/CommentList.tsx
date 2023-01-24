import { Divider } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useCommentStore from "store/comments.store";
import React from "react";
import { Socket } from "socket.io-client";
import CommentComponent from "./CommentComponent/CommentComponent";

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const CommentList = ({ socket }: IProps) => {
  const { comments } = useCommentStore((state) => ({
    comments: state.comments,
  }));
  return (
    <>
      {comments
        .filter((comment) => !comment.parentId)
        .map((comment) => (
          <React.Fragment key={comment._id}>
            <CommentComponent
              socket={socket}
              comments={comments}
              comment={comment}
            />
            <Divider className="my-1" />
          </React.Fragment>
        ))}
    </>
  );
};

export default React.memo(CommentList);
