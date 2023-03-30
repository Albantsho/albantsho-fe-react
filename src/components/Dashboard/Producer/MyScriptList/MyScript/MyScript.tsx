import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "@shared/PdfFile/PdfFile";
import useDraftApi from "apis/Draft.api";
import { IScript } from "interfaces/script";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let valueForConvertPdf = "";
  if (resDraft) {
    const htmlContent = new DOMParser().parseFromString(
      resDraft.draft,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    valueForConvertPdf = serializeWithoutDiv({ children: value }) as string;
  }

  const seeScript = async () => {
    const res = await getOneDraftAsPdf(script._id as string);
    const blobUrl = window.URL.createObjectURL(new Blob([res]));
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", `${script.title}.pdf`);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

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
        {resDraft ? (
          <PDFDownloadLink
            document={
              <PDFFile
                names={script.names}
                scriptValue={valueForConvertPdf as string}
                basedOn={script.basedOn}
                draftDate={script.draftDate}
                title={script.title}
                writtenBy={script.writtenBy}
              />
            }
            fileName={script.title}
          >
            <Button
              variant="text"
              sx={{
                border: "1px solid #7953B5",
                borderRadius: 1.5,
              }}
              className="sm:hidden mb-2 mt-1"
            >
              View script
            </Button>
          </PDFDownloadLink>
        ) : (
          <Button
            onClick={seeScript}
            variant="text"
            sx={{
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className="sm:hidden mb-2 mt-1"
          >
            View script
          </Button>
        )}
      </TableCell>
      <TableCell
        sx={{
          "&.MuiTableCell-root": {
            pl: { lg: 0 },
          },
        }}
        className="hidden sm:flex items-center sm:py-6 xl:py-10 justify-end"
      >
        {" "}
        {resDraft ? (
          <PDFDownloadLink
            document={
              <PDFFile
                names={script.names}
                scriptValue={valueForConvertPdf as string}
                basedOn={script.basedOn}
                draftDate={script.draftDate}
                title={script.title}
                writtenBy={script.writtenBy}
              />
            }
            fileName={script.title}
          >
            <Button
              variant="text"
              sx={{
                border: "1px solid #7953B5",
                borderRadius: 1.5,
              }}
              className="md:ml-auto xl:ml-0"
            >
              View script
            </Button>
          </PDFDownloadLink>
        ) : (
          <Button
            onClick={seeScript}
            variant="text"
            sx={{
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className="md:ml-auto xl:ml-0"
          >
            View script
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default MyScript;
