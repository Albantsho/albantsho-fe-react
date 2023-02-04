import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IPayloadMintNft {
  nftId: string;
  transaction: string;
  tokenId: string;
}

const useNftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllUserNfts() {
      const res = await axiosPrivate.get("/nft/user/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async mintNfts(payload: IPayloadMintNft) {
      const res = await axiosPrivate.post(`/nft/add`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
    async getAllNftForAdmin(searchQuery: string) {
      const res = await axiosPrivate.get(`/nft/all?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
    async getAllNftCountForAdmin(search: string) {
      const res = await axiosPrivate.get(`/nft/wallet/count?search=${search}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useNftApi;
