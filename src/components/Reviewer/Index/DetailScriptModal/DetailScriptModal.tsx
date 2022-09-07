import { Button, Chip, Divider, Modal, Rating, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { Dispatch, SetStateAction } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
  openDetailScript: boolean;
  setOpenDetailScript: Dispatch<SetStateAction<boolean>>;
}

const DetailScriptModal = ({
  openDetailScript,
  setOpenDetailScript,
}: IProps) => {
  const handleCloseUnArchive = () => {
    setOpenDetailScript(false);
  };

  return (
    <Modal
      className="px-5"
      disableAutoFocus={true}
      open={openDetailScript}
      onClose={handleCloseUnArchive}
    >
      <Slide direction="up" in={openDetailScript} mountOnEnter unmountOnExit>
        <div
          className={`bg-white  w-full mt-12 max-w-lg mx-auto py-6 rounded-lg duration-150`}
        >
          <div className="py-6 px-5 flex gap-3 flex-wrap">
            <Button variant="contained">Type A</Button>
            <Button variant="outlined" startIcon={<FiArrowUpRight />}>
              View script
            </Button>
          </div>
          <Divider />
          <div className="py-6 px-5">
            <div className="flex items-center mb-8">
              <Typography
                variant="body1"
                className="futura  font-medium pr-6 text-neutral-800"
              >
                Title:
              </Typography>
              <Typography
                variant="h6"
                className="futura flex-1 font-medium text-primary-700 leading-normal"
              >
                The Long Man of Long Beach
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="body1"
                className="futura font-medium pr-6 text-neutral-800"
              >
                Genre:
              </Typography>
              <Chip label="Tv pilot" />
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="body1"
                className="futura font-medium pr-6 text-neutral-800"
              >
                Entry Date:
              </Typography>
              <Typography
                variant="h6"
                className="futura font-medium text-neutral-800"
              >
                23-04-22
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="body1"
                className="futura font-medium pr-6 text-neutral-800"
              >
                Rating:
              </Typography>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            </div>

            <Btn className="w-full  py-3">Begin review</Btn>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default DetailScriptModal;
