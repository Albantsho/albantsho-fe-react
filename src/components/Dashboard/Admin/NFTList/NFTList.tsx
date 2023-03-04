import emptyBlogs from "@assets/images/empty-blogs.png";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loader from "@shared/Loader/Loader";
import useNftApi from "apis/nft.api";
import Image from "next/image";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import NFT from "./NFT/NFT";

interface IProps {
  searchQuery: string;
}

const NFTList = ({ searchQuery }: IProps) => {
  const { getAllNftForAdmin } = useNftApi();

  const { data: nftsData, isLoading: loadingGetNfts } = useQuery(
    ["nft", searchQuery],
    () => getAllNftForAdmin(searchQuery),
    {
      onError: (error) => errorHandler(error),
    }
  );

  return (
    <>
      {!loadingGetNfts && nftsData ? (
        nftsData.writers.length > 0 ? (
          <TableContainer
            className="bg-white h-full mt-8 overflow-y-hidden mb-16"
            component={Paper}
          >
            <Table className="bg-white h-full" sx={{ minWidth: 650 }}>
              <TableHead className="bg-white">
                <TableRow className="bg-white">
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-primary-700"
                    >
                      NFT
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-primary-700"
                    >
                      User
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-primary-700"
                    >
                      Wallet Addresses
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      className="futura font-medium text-primary-700"
                    >
                      NFT Count
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nftsData.writers.map((nft) => (
                  <NFT nft={nft} key={nft._id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="w-fit h-fit mx-auto text-center mt-14 lg:mt-24">
            <Image
              width={384}
              height={384}
              loading="lazy"
              src={emptyBlogs}
              alt="empty blog list"
            />
          </div>
        )
      ) : (
        <Loader setCustomHeight="min-h-[50vh]" />
      )}
    </>
  );
};

export default NFTList;
