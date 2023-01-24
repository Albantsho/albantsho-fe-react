import { Typography } from "@mui/material";
import { IFullInformationScript } from "interfaces/script";
import useScriptValueStore from "store/scriptValue.store";
import ButtonExport from "./ButtonExport/ButtonExport";

interface IProps {
  script: IFullInformationScript;
}

const ExportFile = ({ script }: IProps) => {
  const scriptValue = useScriptValueStore((state) => state.scriptValue);

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
      {scriptValue && script && (
        <ButtonExport scriptValue={scriptValue} script={script} />
      )}
    </>
  );
};

export default ExportFile;
