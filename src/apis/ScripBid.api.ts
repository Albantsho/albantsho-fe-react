import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IBid, IBidForScript, IProducerBid } from "interfaces/bid";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface ICreateBid {
  scriptId: string;
  amount: number;
}

interface IData_getAllBids {
  scriptBids: IBid[];
}

interface IData_getAllScriptProducerRequest {
  scriptBids: IProducerBid[];
  currentPage: number;
  pagesCount: number;
}

const useScripBidApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getAllBids = useCallback(
    async (id: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllBids>>(
        `/bid/all/${id}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getBidScript = useCallback(
    async (bidId: string) => {
      const res = await axiosPrivate.get<
        IResData<{ scriptBid: IBidForScript; }>
      >(`/bid/${bidId}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getAllBidsForProducer = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAllScriptProducerRequest>
      >(`/bid/producer/all?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const createBid = useCallback(
    async (payload: ICreateBid) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/bid/create",
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const deleteBid = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.delete<IResData<object>>(
        `/bid/delete/${scriptId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const acceptBid = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.post<IResData<object>>(
        `/bid/accept/${scriptId}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const rejectBid = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.post<IResData<object>>(
        `/bid/reject/${scriptId}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  return {
    getAllBids,
    getBidScript,
    getAllBidsForProducer,
    createBid,
    deleteBid,
    acceptBid,
    rejectBid,
  };
};

export default useScripBidApi;
