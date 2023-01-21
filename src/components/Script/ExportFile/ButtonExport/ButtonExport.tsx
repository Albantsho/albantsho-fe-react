import Btn from "@shared/Btn/Btn";
import { IFullInformationScript } from "interfaces/script";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";
let jsPDF = null as any;

if (typeof window !== "undefined") {
  import("jspdf").then((module) => {
    jsPDF = module.default;
  });
}

interface IProps {
  script: IFullInformationScript;
  scriptValue: string;
}

const ButtonExport = ({ script, scriptValue }: IProps) => {
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
        ).toLocaleDateString()}</h6></div><div style="padding:0 40px;width:595px;font-family:Courier;">
        ${valueForConvertPdf}
        </div>`,
        {
          margin: [30, 0],
          autoPaging: "text",
          callback: (pdf: any) => {
            for (let i = 0; i < doc.internal.pages.length; i++) {
              doc.setPage(i);
              doc.text(i <= 1 ? " " : `Page ${String(i - 1)}`, 275, 830);
            }
            pdf.save(script.title);
          },
        }
      );
    }
  };

  return (
    <Btn onClick={handleExportPdfFile} className="py-2 px-6">
      Export File
    </Btn>
  );
};

export default ButtonExport;
