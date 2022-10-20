import { Button, IconButton, Modal, Slide, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openAddEmail: boolean;
  handleCloseAddEmailModal: () => void;
  emailValue: string;
  changeEmailValue: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  wrapEmailFunction: () => void;
  unWrapEmailFunction: () => void;
}

const AddEmailModal = ({
  openAddEmail,
  handleCloseAddEmailModal,
  emailValue,
  changeEmailValue,
  wrapEmailFunction,
  unWrapEmailFunction,
}: IProps) => {
  return (
    <Modal
      className="px-5"
      open={openAddEmail}
      onClose={handleCloseAddEmailModal}
    >
      <Slide direction="down" in={openAddEmail} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-8 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseAddEmailModal}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose />
          </IconButton>
          <label htmlFor="wrap-email">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Enter Your Email
            </Typography>
          </label>
          <CustomInput
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5 },
              "& .MuiFormHelperText-root": {
                mx: 0,
                color: "red",
              },
            }}
            variant="outlined"
            id="wrap-email"
            value={emailValue}
            onChange={changeEmailValue}
          />
          <div className="flex mt-4 gap-3">
            <Button
              variant="contained"
              disableElevation
              onClick={wrapEmailFunction}
              size="large"
              color="primary"
              className="py-3 px-5"
            >
              Enter Email
            </Button>
            <Button
              variant="outlined"
              onClick={unWrapEmailFunction}
              size="large"
              color="warning"
              className="py-3 px-5"
            >
              UnLink Email
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AddEmailModal;
