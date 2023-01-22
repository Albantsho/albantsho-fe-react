import { Button, type ButtonProps } from "@mui/material";
import useDraftApi from "apis/Draft.api";
import { IScript } from "interfaces/script";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

interface IProps extends ButtonProps {
  script: IScript;
}

const ButtonExport = ({ script, ...props }: IProps) => {
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();
  const [resDraft, setResDraft] = useState<any>();

  useEffect(() => {
    async function getDraftFunc() {
      try {
        const res = await getOneDraft(script._id as string);
        setResDraft(res);
      } catch (error) {
        ("");
      }
    }
    getDraftFunc();
  }, []);

  const seeScript = async () => {
    if (resDraft.data) {
      const htmlContent = new DOMParser().parseFromString(
        resDraft.data.draft,
        "text/html"
      );
      const value = deserializeScriptWithOutDiv(htmlContent.body);
      const valueForConvertPdf = serializeWithoutDiv({ children: value });
      const doc = new jsPDF("p", "pt", "a4");
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
          ).toLocaleDateString()}</h6></div><div style="padding:0 40px;width:595px;font-family:Courier Prime;">
          ${valueForConvertPdf}
          </div>`,
          {
            margin: [30, 0],
            autoPaging: "text",
            callback: (pdf) => {
              for (let i = 0; i < doc.internal.pages.length; i++) {
                doc.setPage(i);
                doc.text(i <= 1 ? " " : `Page ${String(i - 1)}`, 275, 830);
              }
              pdf.save(script.title);
            },
          }
        );
      }
    } else {
      const res = await getOneDraftAsPdf(script._id as string);
      const blobUrl = window.URL.createObjectURL(new Blob([res]));
      const aTag = document.createElement("a");
      aTag.href = blobUrl;
      aTag.setAttribute("download", `${script.title}.pdf`);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  };

  return (
    <Button
      {...props}
      onClick={seeScript}
      variant="text"
      sx={{
        border: "1px solid #7953B5",
        borderRadius: 1.5,
      }}
      className=" sm:hidden mb-2 mt-1"
    >
      View script
    </Button>
  );
};

export default ButtonExport;
