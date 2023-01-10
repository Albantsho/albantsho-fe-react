import useAxiosPrivate from "hooks/useAxiosPrivate";

interface IPayloadMintNft {
  nftId: string;
}

const useNftApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllUserNfts() {
      const res = await axiosPrivate.get("/nft/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async mintNfts(nftId: string, payload: IPayloadMintNft) {
      const res = await axiosPrivate.post(`/nft/mint/${nftId}`, payload, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useNftApi;
