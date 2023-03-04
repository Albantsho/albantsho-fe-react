import useAxiosPrivate from "hooks/useAxiosPrivate";
import { INft, INftForAdmin } from "interfaces/nft";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface IPayloadMintNft {
  nftId: string;
  transaction: string;
  tokenId: string;
}

interface IData_getUserNFT {
  nfts: INft[];
}

interface IData_getAllNFTForAdmin {
  writers: INftForAdmin[];
}

const useNftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getAllUserNfts = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_getUserNFT>>(
      "/nft/user/all",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const mintNfts = useCallback(
    async (payload: IPayloadMintNft) => {
      const res = await axiosPrivate.post<IResData<object>>(
        `/nft/add`,
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getAllNftForAdmin = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllNFTForAdmin>>(
        `/nft/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getAllNftCountForAdmin = useCallback(
    async (search: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllNFTForAdmin>>(
        `/nft/wallet/count?search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  return {
    getAllUserNfts,
    mintNfts,
    getAllNftForAdmin,
    getAllNftCountForAdmin,
  };
};

export default useNftApi;
