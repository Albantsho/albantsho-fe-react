import { Button, IconButton, Modal, Slide, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openAddTable: boolean;
  handleCloseAddTableModal: () => void;
  tableValues: {
    rows: string;
    columns: string;
  };
  handleChangeValueTable: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  insertTable: () => void;
}

const AddTableModal = ({
  openAddTable,
  handleCloseAddTableModal,
  tableValues,
  handleChangeValueTable,
  insertTable,
}: IProps) => {
  return (
    <Modal
      className="px-5"
      open={openAddTable}
      onClose={handleCloseAddTableModal}
    >
      <Slide direction="down" in={openAddTable} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-8 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseAddTableModal}
            className="absolute top-3 right-3"
          >
            <AiOutlineClose />
          </IconButton>
          <label htmlFor="insert-table">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Enter Rows and Columns
            </Typography>
          </label>
          <div className="flex gap-4">
            <CustomInput
              id="insert-table"
              value={tableValues.rows}
              name="rows"
              variant="outlined"
              type="tel"
              placeholder="row"
              fullWidth
              onChange={handleChangeValueTable}
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
              inputProps={{
                maxLength: 1,
                min: 0,
              }}
            />
            <CustomInput
              id="insert-table"
              value={tableValues.columns}
              name="columns"
              variant="outlined"
              type="tel"
              placeholder="column"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
              onChange={handleChangeValueTable}
              inputProps={{
                maxLength: 1,
                min: 0,
              }}
            />
          </div>
          <div className="flex mt-4 gap-3">
            <Button
              variant="contained"
              disableElevation
              onClick={insertTable}
              size="large"
              color="primary"
              className="py-3 px-5"
            >
              Create Table
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AddTableModal;
