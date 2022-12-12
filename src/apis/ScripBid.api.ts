import useAxiosPrivate from "hooks/useAxiosPrivate";

interface ICreateBid {
  scriptId: string;
  amount: number;
}

const useScripBidApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async createBid(payload: ICreateBid) {
      const res = await axiosPrivate.post("/bid/create", payload, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async deleteBid(id: string) {
      const res = await axiosPrivate.delete(`/bid/delete/${id}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async acceptBid(id: string) {
      const res = await axiosPrivate.post(
        `/bid/accept/${id}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async rejectBid(id: string) {
      const res = await axiosPrivate.post(
        `/bid/reject/${id}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getAllBidsForProducer() {
      const res = await axiosPrivate.get("/bid/producer/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getAllBids(bidId: string) {
      const res = await axiosPrivate.get(`/bid/all/${bidId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },

    async getBidScript(bidId: string) {
      const res = await axiosPrivate.get(`/bid/${bidId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useScripBidApi;
