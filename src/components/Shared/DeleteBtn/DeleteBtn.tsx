import { Button } from "@mui/material";

const DeleteBtn = ({ ...props }) => {
  return (
    <div className="text-neutral-300">
      <Button
        {...props}
        color="inherit"
        size="large"
        variant="outlined"
        className="py-4 px-5  border h-full rounded-lg border-gray-300 hover:border-gray-300"
      >
        Cancel
      </Button>
    </div>
  );
};

export default DeleteBtn;
