import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  SvgIcon,
  Typography,
} from "@mui/material";
import { bgArray } from "assets/colors/color-list";
import { IComment } from "interfaces/comment";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import TickIcon from "./assets/tick.svg";

interface IProps {
  commentList: IComment[];
  comment: IComment;
}

const CommentComponent = ({ comment, commentList }: IProps) => {
  const [replyComment, setReplyComment] = useState(false);
  const allReplies = commentList.filter((c) => c.parentId === comment._id);

  const handleReplayComment = () => setReplyComment((prevState) => !prevState);

  return (
    <Accordion sx={{ "&:before": { display: "none" } }} className="shadow-none">
      <AccordionSummary
        sx={{
          "&.MuiAccordionSummary-root": {
            marginBottom: "-8px",
          },
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
            gap: "9px",
          },
        }}
        className="p-0"
        expandIcon={
          <SvgIcon
            className="text-gray-400"
            inheritViewBox
            component={BiChevronDown}
          />
        }
      >
        <Avatar
          style={{ backgroundColor: bgArray[Math.floor(Math.random() * 14)] }}
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

        <Typography variant="subtitle1" className="text-gray-400">
          {new Date(
            Date.now() - new Date(comment.createdAt).getTime()
          ).getMinutes()}
          min ago
        </Typography>
        <SvgIcon
          className="ml-auto mr-[2px]"
          component={TickIcon}
          inheritViewBox
        />
      </AccordionSummary>
      <AccordionDetails className="pt-3 md:pt-5">
        <Typography variant="body2" className="mt-3 mb-4">
          {comment.message}
        </Typography>
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
          <div className="bg-tinted-50 rounded-lg flex justify-between items-center ">
            <input
              type="text"
              placeholder="Reply"
              className="bg-transparent outline-none placeholder:text-primary-700 px-4 min-h-[40px]"
            />
            <IoMdSend className="text-primary-700 mr-4" />
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CommentComponent;
