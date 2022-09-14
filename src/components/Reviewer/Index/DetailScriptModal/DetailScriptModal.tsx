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
      className="px-5 md:hidden"
      disableAutoFocus={true}
      open={openDetailScript}
      onClose={handleCloseUnArchive}
    >
      <Grow in={openDetailScript} mountOnEnter unmountOnExit>
        <div
          className={`bg-white  w-full mt-12 max-w-lg mx-auto py-8 rounded-lg`}
        >
          <div className="pb-8 px-5 sm:px-7 flex gap-3 items-stretch">
            <Button className="py-2 px-4" variant="contained">
              Type A
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
                The Long Man of Long Beach
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Genre:
              </Typography>
              <Chip className="py-3 px-4 rounded-md" label="Tv pilot" />
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
                23-04-22
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Rating:
              </Typography>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            </div>

            <Btn className="w-full  py-3">Begin review</Btn>
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default DetailScriptModal;
