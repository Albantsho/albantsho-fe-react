import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface IPayloadIncreaseWalletBalance {
  transactionId: string;
  method: string;
}

interface IPayloadWithdrawWallet {
  amount: string;
  method: string;
  bankAccountName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  network?: string;
  usdtTrc20Address?: string;
}

const useWalletApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getWalletBalance = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<{ balance: number; }>>(
      "/wallet/balance",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const increaseWalletBalance = useCallback(async (payload: IPayloadIncreaseWalletBalance) => {
    const res = await axiosPrivate.post(
      "/wallet/deposit",
      payload, {
      signal: controller?.signal,
    }
    );

    return res.data;
  }, [axiosPrivate, controller?.signal]);

  const withdrawWallet = useCallback(async (payload: IPayloadWithdrawWallet) => {
    const res = await axiosPrivate.post(
      "/withdraw",
      payload, {
      signal: controller?.signal,
    }
    );

    return res.data;
  }, [axiosPrivate, controller?.signal]);

  return {
    getWalletBalance,
    increaseWalletBalance,
    withdrawWallet
  };
};

export default useWalletApi;
