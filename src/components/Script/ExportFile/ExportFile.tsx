import { Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Btn from "@shared/Btn/Btn";
import useScriptsApi from "apis/Scripts.api";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import useScriptValueStore from "store/scriptValue.store";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";
import PDFFile from "../../Shared/PdfFile/PdfFile";

interface IProps {
  script: IFullInformationScript;
}

const ExportFile = ({ script }: IProps) => {
  const { updateScript } = useScriptsApi();
  const scriptValue = useScriptValueStore((state) => state.scriptValue);
  const { query } = useRouter();
  const htmlContent = new DOMParser().parseFromString(scriptValue, "text/html");
  const value = deserializeScriptWithOutDiv(htmlContent.body);
  const valueForConvertPdf = serializeWithoutDiv({ children: value });

  const handleExportPdfFile = async () => {
    await updateScript(
      { scriptPart: valueForConvertPdf?.slice(0, 3500) },
      query.id as string
    );
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
      <Typography className="max-w-[230px] pb-6">
        Document will be exported as a PDF file.
      </Typography>
      <PDFDownloadLink
        document={
          <PDFFile
            scriptValue={scriptValue}
            basedOn={script.basedOn}
            draftDate={script.draftDate}
            title={script.title}
            writtenBy={script.writtenBy}
            names={script.names}
          />
        }
        fileName={script.title}
      >
        <Btn onClick={handleExportPdfFile} className="py-2 px-6">
          Export File
        </Btn>
      </PDFDownloadLink>
    </>
  );
};

export default ExportFile;
