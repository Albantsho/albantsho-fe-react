import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { IFullInformationScript } from "interfaces/script";
import jsPDF from "jspdf";
import useScriptValueStore from "store/scriptValue.store";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

interface IProps {
  script: IFullInformationScript;
}

const ExportFile = ({ script }: IProps) => {
  const scriptValue = useScriptValueStore((state) => state.scriptValue);
  const doc = new jsPDF("p", "pt", "a4");
  const htmlContent = new DOMParser().parseFromString(scriptValue, "text/html");

  const handleExportPdfFile = () => {
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    const valueForConvertPdf = serializeWithoutDiv({ children: value });

    if (valueForConvertPdf) {
      doc.html(
        `<div style="padding:0 40px;width:595px;height:842px;font-family:Courier;display:flex;align-items:center;gap:25px;flex-direction:column;padding:0 20px;padding-top:80px;"><h6 style="font-family:Courier;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
          script.title
        }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">Writers<br/>${
          script.writtenBy.length !== 0 && script.writtenBy.join(" ")
        }</h6><h6 style="font-family:Courier;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
          script.basedOn
        }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">${new Date(
          script.draftDate ? (script.draftDate as string) : Date.now()
        ).toLocaleDateString()}</h6></div><div style="padding:0 40px;width:595px;font-family:Courier Prime;">${valueForConvertPdf}</div>`,
        {
          margin: [30, 0],
          autoPaging: "slice",

          callback: (pdf) => {
            for (let i = 0; i < doc.internal.pages.length; i++) {
              doc.setPage(i);
              doc.text(i <= 1 ? " " : `Page ${String(i - 1)}`, 275, 830);
            }
            pdf.save(script.title);
            console.log(doc.output());
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
