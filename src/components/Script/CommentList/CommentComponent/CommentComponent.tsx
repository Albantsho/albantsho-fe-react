import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import TickIcon from "./assets/tick.svg";

const CommentComponent = () => {
  const [replyComment, setReplyComment] = useState(false);

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
            gap: "12px",
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
        <SvgIcon component={TickIcon} inheritViewBox />
      </AccordionSummary>
      <AccordionDetails className="pt-3 md:pt-5">
        <Typography variant="body2" className="mt-3 mb-4">
          It amet, consectetur adipiscing elit. Volutpat vitae orci proin semper
          commodo a habitasse mollis. Magna pellentesque dignissim aliquam duis
          id tincidunt metus
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
      </AccordionDetails>
    </Accordion>
  );
};

export default CommentComponent;
