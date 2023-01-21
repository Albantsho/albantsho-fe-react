import { Button, TableCell, TableRow, Typography } from "@mui/material";
import useDraftApi from "apis/Draft.api";
import { IScript } from "interfaces/script";
import jsPDF from "jspdf";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import routes from "routes/routes";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

interface IProps {
  script: IScript;
}

const MyScript = ({ script }: IProps) => {
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();
  const [resDraft, setResDraft] = useState<any>();

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

  return (
    <TableRow
      data-aos="fade-up"
      sx={{
        "& td, & th": {
          borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
        },
        "&:last-child td, &:last-child th": { border: 0 },
      }}
      className="flex flex-1"
    >
      <TableCell
        className="flex flex-1 flex-wrap sm:flex-nowrap items-start sm:py-6 xl:py-10 gap-2"
        sx={{
          "&.MuiTableCell-root": {
            px: { xs: 0, sm: 2 },
          },
        }}
      >
        <Image
          width="64"
          height="64"
          className="rounded-md w-16 h-16"
          loading="lazy"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
          alt={script.title}
        />
        <div className="flex-grow sm:flex-1 sm:max-w-[271px] min-w-[170px] sm:ml-2">
          <Link
            passHref
            href={routes.marketplaceOneScript.dynamicUrl(script._id)}
          >
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {script.title}
            </Typography>
          </Link>

          <Typography variant="caption" className="text-stone-800">
            {script.tagline}
          </Typography>
        </div>
        <Button
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
      </TableCell>
      <TableCell
        sx={{
          "&.MuiTableCell-root": {
            pl: { lg: 0 },
          },
        }}
        className="hidden sm:flex items-center sm:py-6 xl:py-10 justify-end"
      >
        <Button
          onClick={seeScript}
          variant="text"
          sx={{
            paddingY: 1,
            border: "1px solid #7953B5",
            borderRadius: 1.5,
          }}
          className="md:ml-auto xl:ml-0"
        >
          View script
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MyScript;
