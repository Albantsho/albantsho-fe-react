import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import useScriptValueStore from "app/scriptValue.store";
import jsPDF from "jspdf";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

const ExportFile = () => {
  const scriptValue = useScriptValueStore((state) => state.scriptValue);

  const handleExportPdfFile = () => {
    const htmlContent = new DOMParser().parseFromString(
      scriptValue,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    console.log({ children: value });

    const valueForConvertPdf = serializeWithoutDiv({ children: value });
    const doc = new jsPDF("p", "pt", "a4");
    if (valueForConvertPdf) {
      doc.html(
        `<div style="padding:0 40px;width:595px;font-family:Courier Prime;">
        ${valueForConvertPdf}
        </div>`,
        {
          margin: [30, 0],
          autoPaging: "text",
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
