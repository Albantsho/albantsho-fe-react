import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";

const ExportFile = () => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.main"
        className="futura font-semibold leading-normal"
      >
        Export Document
      </Typography>
      <Typography className="max-w-[230px] mb-6">
        Document will be exported as a PDF file.
      </Typography>
      <Btn className="py-2 px-6">Export File</Btn>
    </>
  );
};

export default ExportFile;
