import { Avatar, Button, Typography } from "@mui/material";
import { IComment } from "interfaces/comment";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

interface IProps {
  comment: IComment;
}

const ResponseComment = ({ comment }: IProps) => {
  const [replyComment, setReplyComment] = useState(false);

  const handleReplayComment = () => setReplyComment((prevState) => !prevState);

  return (
    <div className="shadow-none">
      <div className="items-center flex gap-12">
        <Avatar>N</Avatar>
        <Typography
          variant="h6"
          color="primary.main"
          className="font-normal futura"
        >
          Jane Doe
        </Typography>
        <Typography variant="subtitle1" className="text-gray-400">
          5min ago
        </Typography>
      </div>
      <div className="pt-3 md:pt-5">
        <Typography variant="body2" className="mt-3 mb-4">
          {comment.message}
        </Typography>
        <Button
          onClick={handleReplayComment}
          disableRipple
          variant="text"
          className="my-4 text-gray-300"
        >
          1 Reply
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
      </div>
    </div>
  );
};

export default ResponseComment;
