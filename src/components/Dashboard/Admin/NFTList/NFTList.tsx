import emptyBlogs from "@assets/images/empty-blogs.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";
import useNftApi from "apis/nft.api";
import useReviewsApi from "apis/Reviews.api";
import { INftForAdmin } from "interfaces/nft";
import { IAssignedOrCompletedRequest } from "interfaces/reviews";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import NFT from "./NFT/NFT";

interface IProps {
  searchQuery: string;
}

const NFTListArray = [
  {
    _id: "1",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 5,
  },
  {
    _id: "10",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 5,
  },
  {
    _id: "2",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 10,
  },
  {
    _id: "3",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 7,
  },
  {
    _id: "4",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 3,
  },
  {
    _id: "5",
    walletAddress: "0x874491131b9094d73bE37C13A81c3D06B4cE71e3",
    nftCount: 8,
  },
];

const NFTList = ({ searchQuery }: IProps) => {
  const [nftList, setNftList] = useState<Array<INftForAdmin>>([]);
  const [loading, setLoading] = useState(false);
  const { getAllNftForAdmin } = useNftApi();

  useEffect(() => {
    async function getCompletedReviewsFunc() {
      try {
        setNftList([]);
        setLoading(true);
        const res = await getAllNftForAdmin(searchQuery);
        setNftList(res.data.writers);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }
    getCompletedReviewsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : nftList.length > 0 ? (
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
              {nftList.map((nft) => (
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
      )}
    </>
  );
};

export default NFTList;
