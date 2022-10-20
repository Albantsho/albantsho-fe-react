import { Button, IconButton, Modal, Slide, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openAddImage: boolean;
  handleCloseAddImageModal: () => void;
  imageValue: string;
  changeImageValue: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleGetUrl: () => void;
}

const AddImageModal = ({
  openAddImage,
  handleCloseAddImageModal,
  imageValue,
  changeImageValue,
  handleGetUrl,
}: IProps) => {
  return (
    <Modal
      className="px-5"
      open={openAddImage}
      onClose={handleCloseAddImageModal}
    >
      <Slide direction="down" in={openAddImage} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-8 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseAddImageModal}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose />
          </IconButton>
          <label htmlFor="insert-image">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Enter the URL of the Image
            </Typography>
          </label>
          <CustomInput
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5 },
            }}
            variant="outlined"
            id="insert-image"
            value={imageValue}
            onChange={changeImageValue}
          />
          <div className="flex mt-4 gap-3">
            <Button
              variant="contained"
              disableElevation
              onClick={handleGetUrl}
              size="large"
              color="primary"
              className="py-3 px-5"
            >
              Enter Image
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AddImageModal;
