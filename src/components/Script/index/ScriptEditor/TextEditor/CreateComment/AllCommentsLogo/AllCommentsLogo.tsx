import { IComment } from "interfaces/comment";
import IconComment from "../assets/commentIcon.svg";
import { Avatar, SvgIcon } from "@mui/material";

interface IProps {
  comment: IComment;
}

const AllCommentsLogo = ({ comment }: IProps) => {
  return (
    <div
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
        className="w-14 h-14"
        fontSize="large"
        inheritViewBox
      />
      <Avatar
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${comment.user?.image}`}
        className="absolute top-2 left-3 w-9 h-9"
        alt={comment.user?.firstName}
      />
    </div>
  );
};

export default AllCommentsLogo;
