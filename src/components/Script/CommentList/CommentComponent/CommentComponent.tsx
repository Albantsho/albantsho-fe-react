import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  SvgIcon,
  Typography,
} from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { bgArray } from "assets/colors/color-list";
import { IComment } from "interfaces/comment";
import Link from "next/link";
import React, { useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Socket } from "socket.io-client";
import { timeSince } from "utils/get-time";
import TickIcon from "./assets/tick.svg";
import FormComment from "./FormComment/FormComment";
import ResponseComment from "./ResponseComment/ResponseComment";

interface IProps {
  comments: IComment[];
  comment: IComment;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const CommentComponent = ({ comment, comments, socket }: IProps) => {
  const time = timeSince(new Date(comment.updatedAt).getTime());

  return (
    <Accordion sx={{ "&:before": { display: "none" } }} className="shadow-none">
      <AccordionSummary
        onClick={() => {
          document
            .getElementById(comment._id)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
        }}
        sx={{
          "&.MuiAccordionSummary-root": {
            marginBottom: "-8px",
          },
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
            gap: "8px",
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
        <div className="flex items-center w-full gap-[9px] flex-1">
          <Avatar
            className="w-9 h-9"
            style={{
              backgroundColor: useMemo(
                () => bgArray[Math.floor(Math.random() * 14)],
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [bgArray]
              ),
            }}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${comment.user?.image}`}
            alt={comment.user?.firstName}
          />
          <Typography
            variant="h6"
            color="primary.main"
            className="font-normal futura leading-none"
          >
            {`${comment.user?.firstName} ${comment.user?.lastName}`}
          </Typography>
          <Typography variant="body2" className="text-gray-400 leading-none">
            {time}
          </Typography>
        </div>
        <SvgIcon
          className="ml-auto"
          fontSize="small"
          component={TickIcon}
          inheritViewBox
        />
      </AccordionSummary>
      <AccordionDetails className="pt-3 md:pt-5">
        <Typography variant="body2" className="mt-3 mb-4">
          {comment.message}
        </Typography>
        <FormComment comments={comments} id={comment._id} socket={socket} />
        <ResponseComment
          socket={socket}
          comments={comments}
          parentId={comment._id}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(CommentComponent);
