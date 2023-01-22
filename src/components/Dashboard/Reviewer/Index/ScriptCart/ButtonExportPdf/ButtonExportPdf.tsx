import { Button } from "@mui/material";
import useDraftApi from "apis/Draft.api";
import { IReviewerTask } from "interfaces/reviews";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

interface IProps {
  selectedScript: IReviewerTask | undefined;
}

const ButtonExportPdf = ({ selectedScript }: IProps) => {
  const [resDraft, setResDraft] = useState<any>();
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();

  useEffect(() => {
    async function getDraftFunc() {
      try {
        const res = await getOneDraft(selectedScript?._id as string);
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
            selectedScript?.title
          }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">Writers<br/>${
            selectedScript?.writtenBy.length !== 0 &&
            selectedScript?.writtenBy.join(" ")
          }</h6><h6 style="font-family:Courier;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
            selectedScript?.basedOn
          }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">${new Date(
            selectedScript?.draftDate
              ? (selectedScript.draftDate as string)
              : Date.now()
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
              pdf.save(selectedScript?.title);
            },
          }
        );
      }
    } else {
      const res = await getOneDraftAsPdf(selectedScript?._id as string);
      const blobUrl = window.URL.createObjectURL(new Blob([res]));
      const aTag = document.createElement("a");
      aTag.href = blobUrl;
      aTag.setAttribute("download", `${selectedScript?.title}.pdf`);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  };

  return (
    <Button
      onClick={seeScript}
      className="py-[10px] px-4"
      variant="outlined"
      startIcon={<FiArrowUpRight />}
    >
      View script
    </Button>
  );
};

export default ButtonExportPdf;
