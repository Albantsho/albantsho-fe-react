import { Button, IconButton, Modal, Slide, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openAddLink: boolean;
  handleCloseAddLinkModal: () => void;
  linkValue: string;
  changeLinkValue: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  wrapLinkFunction: () => void;
}

const AddLinkModal = ({
  openAddLink,
  handleCloseAddLinkModal,
  linkValue,
  changeLinkValue,
  wrapLinkFunction,
}: IProps) => {
  return (
    <Modal
      className="px-5"
      open={openAddLink}
      onClose={handleCloseAddLinkModal}
    >
      <Slide direction="down" in={openAddLink} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-8 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseAddLinkModal}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose />
          </IconButton>
          <label htmlFor="wrap-link">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Enter the URL of the link
            </Typography>
          </label>
          <CustomInput
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5 },
            }}
            variant="outlined"
            id="wrap-link"
            value={linkValue}
            onChange={changeLinkValue}
          />
          <div className="flex mt-4 gap-3">
            <Button
              variant="contained"
              disableElevation
              onClick={wrapLinkFunction}
              size="large"
              color="primary"
              className="py-3 px-5"
            >
              Enter Link
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AddLinkModal;
