import nftLogo from "@assets/images/logo.png";
import { TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";

interface IProps {
  nft: {
    _id: string;
    walletAddress: string;
    nftCount: number;
  };
}

const NFT = ({ nft }: IProps) => {
  return (
    <TableRow
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
      sx={{
        "& td, & th": {
          borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
        },
        "&:last-child td, &:last-child th": { border: 0 },
      }}
      className="bg-white"
    >
      <TableCell align="center">
        <div className="w-14 h-14 bg-purple-100 flex justify-center items-center mx-auto rounded-full">
          <div className="w-8 h-8 flex justify-center items-center">
            <Image src={nftLogo} alt="nft Logo" />
          </div>
        </div>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1" className="text-primary-700">
          {nft.walletAddress}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1" className="text-primary-700">
          {nft.nftCount}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default NFT;
