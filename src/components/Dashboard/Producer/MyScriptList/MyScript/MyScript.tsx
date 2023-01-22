import { TableCell, TableRow, Typography } from "@mui/material";
import { IScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import routes from "routes/routes";

const ButtonExport = dynamic(() => import("./ButtonExport/ButtonExport"), {
  ssr: false,
});

interface IProps {
  script: IScript;
}

const MyScript = ({ script }: IProps) => {
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
        <ButtonExport className="sm:hidden mb-2 mt-1" script={script} />
      </TableCell>
      <TableCell
        sx={{
          "&.MuiTableCell-root": {
            pl: { lg: 0 },
          },
        }}
        className="hidden sm:flex items-center sm:py-6 xl:py-10 justify-end"
      >
        <ButtonExport className="md:ml-auto xl:ml-0" script={script} />
      </TableCell>
    </TableRow>
  );
};

export default MyScript;
