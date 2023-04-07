import { IComment } from "interfaces/comment";
import IconComment from "../assets/commentIcon.svg";
import { Avatar, SvgIcon } from "@mui/material";

interface IProps {
  comment: IComment;
}

const AllCommentsLogo = ({ comment }: IProps) => {
  return (
    <div
      id={comment._id}
      style={{
        top: `${comment.positionY}px`,
        left: `${comment.positionX}px`,
        position: "absolute",
        zIndex: 9,
      }}
      className="w-fit relative"
    >
      <SvgIcon
        component={IconComment}
        className="w-12 h-12"
        fontSize="large"
        inheritViewBox
      />
      <Avatar
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${comment.user?.image}`}
        className="absolute top-2  left-[9px] w-8 h-8"
        alt={comment.user?.firstName}
      />
    </div>
  );
};

export default AllCommentsLogo;
