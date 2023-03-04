import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { IPayment, IWithdraw } from "interfaces/transaction";
import { useCallback } from "react";

interface IData_getWithdraws {
  withdraws: IWithdraw[];
}

interface IData_getPayments {
  payments: IPayment[];
}

const useTransactionApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getAllWithdraws = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_getWithdraws>>(
      "/transaction/withdraws",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const getAllPayments = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_getPayments>>(
      "/transaction/payments",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  return {
    getAllWithdraws,
    getAllPayments,
  };
};

export default useTransactionApi;
