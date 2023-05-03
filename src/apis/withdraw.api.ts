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

interface IData_allWeblogs {
  withdraws: IWithdraw[];
  currentPage: number;
  pagesCount: number;
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
    const res = await axiosPrivate.get<IResData<IData_allWeblogs>>(
      `/withdraw/user/all`
      ,
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const getAllWithdrawsForAdmin = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_allWeblogs>>(
      `/withdraw/all`,
      {
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
    resendOtp
  };
};

export default useWithdrawApi;
