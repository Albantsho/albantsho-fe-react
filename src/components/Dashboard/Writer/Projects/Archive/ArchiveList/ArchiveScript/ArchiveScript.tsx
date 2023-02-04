import {
  Button,
  Chip,
  SvgIcon,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IWriterScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";
import DefaultImage from "@assets/default-image-script.svg";

const UnArchiveModal = dynamic(
  () => import("../../UnArchiveModal/UnArchiveModal")
);

interface IProps {
  script: IWriterScript;
  setListScripts: React.Dispatch<React.SetStateAction<IWriterScript[]>>;
}

const ArchiveScript = ({ script, setListScripts }: IProps) => {
  const [openUnArchive, setOpenUnArchive] = useState<boolean>(false);
  const handleOpenUnArchive = () => setOpenUnArchive(true);

  return (
    <>
      <TableRow
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        sx={{
          "& td, & th": {
            borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
          },
          "&:last-child td, &:last-child th": { border: 0 },
        }}
        className="flex flex-1"
      >
        <TableCell
          scope="script"
          className="flex flex-1 py-4 pl-0 flex-col sm:flex-row  sm:py-6 xl:py-10 items-start sm:items-center xl:max-w-lg gap-4 sm:gap-8"
        >
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="mt-1">
              {script.image ? (
                <Image
                  width={64}
                  height={64}
                  style={{ width: "64px", height: "64px" }}
                  className="rounded-md w-16 h-16"
                  loading="lazy"
                  alt={script.title}
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
                />
              ) : (
                <div className="flex justify-center w-[64px] h-[64px] items-center self-start  bg-tinted-100/60 rounded-md">
                  <SvgIcon
                    inheritViewBox
                    fontSize="large"
                    component={DefaultImage}
                  />
                </div>
              )}
            </div>

            <div className="flex-grow sm:max-w-[360px]">
              <Typography
                variant="body1"
                className="futura font-semibold text-primary-700"
              >
                {script.title}
              </Typography>
              <Typography variant="caption" className="text-stone-800">
                {script.tagline}
              </Typography>
            </div>
          </div>
          <Button
            onClick={handleOpenUnArchive}
            variant="text"
            sx={{
              paddingY: 1.5,
              paddingX: 2,
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className="md:hidden"
          >
            Unarchive
          </Button>
        </TableCell>
        <TableCell
          sx={{
            "&.MuiTableCell-root": {
              px: { xs: 0 },
            },
          }}
          className="hidden py-4  sm:py-6 xl:py-10 md:flex lg:hidden xl:flex flex-[0.55] items-center"
        >
          <Chip
            label={script.scriptFormat}
            className={`${
              !script.scriptFormat && "opacity-0"
            } py-6 px-4 md:ml-3 hidden md:flex rounded-md bg-tinted-100/60 text-neutral-800`}
          />
        </TableCell>
        <TableCell
          sx={{
            "&.MuiTableCell-root": {
              pl: { xs: 0 },
            },
          }}
          className="hidden py-4  sm:py-6 xl:py-10 pr-0  md:flex 2xl:flex-[0.1] items-center 2xl:justify-end"
        >
          <Button
            onClick={handleOpenUnArchive}
            variant="text"
            sx={{
              paddingY: 1.5,
              paddingX: 2,
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
          >
            Unarchive
          </Button>
        </TableCell>
      </TableRow>
      <Suspense fallback={null}>
        {openUnArchive ? (
          <UnArchiveModal
            id={script._id}
            openUnArchive={openUnArchive}
            setOpenUnArchive={setOpenUnArchive}
            setListScripts={setListScripts}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default ArchiveScript;
