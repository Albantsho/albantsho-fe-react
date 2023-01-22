import { Typography } from "@mui/material";
import useScriptValueStore from "app/scriptValue.store";
import { IFullInformationScript } from "interfaces/script";
import dynamic from "next/dynamic";

const ButtonExport = dynamic(() => import("./ButtonExport/ButtonExport"), {
  ssr: false,
});

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
