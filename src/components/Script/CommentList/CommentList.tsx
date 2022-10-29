import CommentComponent from "./CommentComponent/CommentComponent";

const CommentList = () => {
  return (
    <>
      {Array.from(new Array(6)).map((_, i) => (
        <CommentComponent key={i} />
      ))}
    </>
  );
};

export default CommentList;
