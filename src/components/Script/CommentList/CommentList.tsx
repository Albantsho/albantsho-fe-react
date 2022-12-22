import { Divider } from "@mui/material";
import { IComment } from "interfaces/comment";
import React from "react";
import CommentComponent from "./CommentComponent/CommentComponent";

interface IProps {
  commentList: IComment[];
}

const CommentList = ({ commentList }: IProps) => {
  return (
    <>
      {commentList.map((comment) => (
        <React.Fragment key={comment._id}>
          <CommentComponent commentList={commentList} comment={comment} />
          <Divider className="my-1" />
        </React.Fragment>
      ))}
    </>
  );
};

export default CommentList;
