import { Divider } from "@mui/material";
import CommentComponent from "./CommentComponent/CommentComponent";

const CommentList = () => {
  return (
    <>
      {Array.from(new Array(6)).map((_, i) => (
        <>
          <CommentComponent key={i} />
          <Divider className="my-1" />
        </>
      ))}
    </>
  );
};

export default CommentList;
