import { Button, IconButton, Modal, Slide, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openSetImageSize: boolean;
  handleCloseSetImageSize: () => void;
  imageSizeValues: {
    width: string;
    height: string;
  };
  handleChangeValueImageSize: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setImageSizeFunc: () => void;
}

const SetImageSizeModal = ({
  openSetImageSize,
  handleCloseSetImageSize,
  imageSizeValues,
  handleChangeValueImageSize,
  setImageSizeFunc,
}: IProps) => {
  return (
    <Modal
      className="px-5"
      open={openSetImageSize}
      onClose={handleCloseSetImageSize}
    >
      <Slide direction="down" in={openSetImageSize} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-8 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseSetImageSize}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose />
          </IconButton>
          <label htmlFor="width-height">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Enter width and height
            </Typography>
          </label>
          <div className="flex gap-4">
            <CustomInput
              id="width-height"
              value={imageSizeValues.width}
              name="width"
              variant="outlined"
              type="tel"
              placeholder="width"
              fullWidth
              onChange={handleChangeValueImageSize}
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
              inputProps={{
                maxLength: 3,
                min: 0,
              }}
            />
            <CustomInput
              id="width-height"
              value={imageSizeValues.height}
              name="height"
              variant="outlined"
              type="tel"
              placeholder="height"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
              onChange={handleChangeValueImageSize}
              inputProps={{
                maxLength: 3,
                min: 0,
              }}
            />
          </div>
          <div className="flex mt-4 gap-3">
            <Button
              variant="contained"
              disableElevation
              onClick={setImageSizeFunc}
              size="large"
              color="primary"
              className="py-3 px-5"
            >
              set Size
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default SetImageSizeModal;
