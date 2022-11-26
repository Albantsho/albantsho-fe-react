import {
  Button,
  Chip,
  Divider,
  Grow,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { IReviewerTask } from "interfaces/reviews";
import { Dispatch, SetStateAction } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
  openDetailScript: boolean;
  setOpenDetailScript: Dispatch<SetStateAction<boolean>>;
  reviewerTaskList: IReviewerTask[];
  id: string;
}

const DetailScriptModal = ({
  openDetailScript,
  setOpenDetailScript,
  reviewerTaskList,
  id,
}: IProps) => {
  const handleCloseUnArchive = () => {
    setOpenDetailScript(false);
  };

  const oneTask = reviewerTaskList.find((reviewTask) => reviewTask._id === id);

  return (
    <Modal
      className="px-5 lg:hidden"
      disableAutoFocus={true}
      open={openDetailScript}
      onClose={handleCloseUnArchive}
    >
      <Grow in={openDetailScript} mountOnEnter unmountOnExit>
        <div
          className={`bg-white  w-full mt-12 max-w-lg mx-auto py-8 rounded-lg`}
        >
          <div className="pb-8 px-5 sm:px-7 flex gap-3 items-stretch">
            <Button disableElevation className="py-2 px-4" variant="contained">
              {oneTask?.review_plan}
            </Button>
            <Button
              className="py-2 px-4"
              variant="outlined"
              startIcon={<FiArrowUpRight />}
            >
              View script
            </Button>
          </div>
          <Divider />
          <div className="pt-8 px-5 sm:px-7">
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Title:
              </Typography>
              <Typography
                variant="h6"
                className="futura flex-1 font-medium text-primary-700 leading-normal"
              >
                {oneTask?.title}
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Genre:
              </Typography>
              <Chip
                className="py-3 px-4 rounded-md"
                label={oneTask?.primary_genre}
              />
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Entry Date:
              </Typography>
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                {oneTask && new Date(oneTask.createdAt).toLocaleDateString()}
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Rating:
              </Typography>
              <Rating value={oneTask?.rate} />
            </div>
            {!oneTask?.review ? (
              <Btn className="w-full py-3">Begin review</Btn>
            ) : oneTask.review.complete ? (
              <Btn color="success" className="w-full py-3">
                Completed
              </Btn>
            ) : (
              <Btn className="w-full py-3">Continue review</Btn>
            )}
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default DetailScriptModal;
