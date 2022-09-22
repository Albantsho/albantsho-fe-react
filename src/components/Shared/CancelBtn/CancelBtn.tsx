import { Button, type ButtonProps } from "@mui/material";

const CancelBtn = (props: ButtonProps) => {
  return (
    <div className="text-neutral-300">
      <Button
        {...props}
        color="inherit"
        size="large"
        variant="outlined"
        className="py-3 px-5  border h-full rounded-lg border-gray-300 hover:border-gray-300"
      >
        Cancel
      </Button>
    </div>
  );
};

export default CancelBtn;
