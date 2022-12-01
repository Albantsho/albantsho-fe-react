import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import jsPDF from "jspdf";

interface IProps {
  textEditorValue: string | undefined;
}

const ExportFile = ({ textEditorValue }: IProps) => {
  const handleExportPdfFile = () => {
    const doc = new jsPDF("p", "pt", "a4");
    // const doc = new jsPDF({ format: "a4", orientation: "p", unit: "px", });
    if (textEditorValue) {
      doc.html(
        `<div style="padding:0 40px;width:595px;">${textEditorValue}</div>`,
        {
          margin: [30, 0],
          callback: (pdf) => {
            for (let i = 1; i < doc.internal.pages.length; i++) {
              doc.setPage(i);
              doc.text(`Page ${String(i)}`, 275, 830);
            }
            pdf.save("script");
          },
        }
      );
    }
  };

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
      <Btn onClick={handleExportPdfFile} className="py-2 px-6">
        Export File
      </Btn>
    </>
  );
};

export default ExportFile;
