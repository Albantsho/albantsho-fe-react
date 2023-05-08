import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { IWithdraw } from "interfaces/withdraw";
import { useCallback } from "react";

interface IPayloadWithdrawRequest {
  amount: string;
  method: string;
  bankAccountName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  // network?: string;
  usdtTrc20Address?: string;
}

export interface IPayloadWithdrawVerify {
  otp: string;
  withdrawId: string;
}

interface IData_allWithdraws {
  withdraws: IWithdraw[];
  currentPage: number;
  pagesCount: number;
}

interface IPayloadUpdateStatusWithdraw {
  status: "done" | "rejected" | "onchecking";
}

interface IFilterWithdrawsQueryValues {
  status: string;
  page: number;
  limit: number;
  search: string;
}

const useWithdrawApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const withdrawRequest = useCallback(async (payload: IPayloadWithdrawRequest) => {
    const res = await axiosPrivate.post<IResData<{ withdraw: IWithdraw; }>>(
      "/withdraw",
      payload, {
      signal: controller?.signal,
    }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const withdrawVerify = useCallback(async (payload: IPayloadWithdrawVerify) => {
    const res = await axiosPrivate.post(
      "/withdraw/otp/verify",
      payload, {
      signal: controller?.signal,
    }
    );

    return res.data;
  }, [axiosPrivate, controller?.signal]);

  const resendOtp = useCallback(async (withdrawId: string) => {
    const res = await axiosPrivate.post(
      `/withdraw/otp/resent/${withdrawId}`,
      {}, {
      signal: controller?.signal,
    }
    );

    return res.data;
  }, [axiosPrivate, controller?.signal]);

  const withdrawDelete = useCallback(async (withdrawId: string) => {
    const res = await axiosPrivate.delete(
      `/withdraw/delete/${withdrawId}`,
      {
        signal: controller?.signal,
      }
    );

    return res.data;
  }, [axiosPrivate, controller?.signal]);

  const getAllWithdraws = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_allWithdraws>>(
      `/withdraw/user/all`
      ,
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const getAllWithdrawsForAdmin = useCallback(async ({ limit, page, status, search }: IFilterWithdrawsQueryValues) => {
    const res = await axiosPrivate.get<IResData<IData_allWithdraws>>(
      `/withdraw/all?limit=${limit}&page=${page}&status=${status}&search=${search}`,
      {
        signal: controller?.signal,
      }
    );
    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const updateStatusWithdraw = useCallback(async (withdrawId: string, { status }: IPayloadUpdateStatusWithdraw) => {
    const res = await axiosPrivate.patch(
      `/withdraw/update/status/${withdrawId}`,
      {
        status
      }, {
      signal: controller?.signal,
    }
    );
    return res.data;
  }, [axiosPrivate, controller?.signal]);

  return {
    withdrawRequest,
    withdrawVerify,
    withdrawDelete,
    getAllWithdraws,
    getAllWithdrawsForAdmin,
    resendOtp,
    updateStatusWithdraw
  };
};

export default useWithdrawApi;
