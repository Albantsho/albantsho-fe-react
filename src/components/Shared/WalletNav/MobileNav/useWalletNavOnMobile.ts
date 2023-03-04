import useWalletApi from "apis/Wallet.api";
import { useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const useWalletNavOnMobile = () => {
  const [open, setOpen] = useState(false);
  const { getWalletBalance } = useWalletApi();

  const handleToggleDrawer = (open: boolean) => () => setOpen(open);

  const { data } = useQuery("balance", () => getWalletBalance(), {
    onError: (error) => errorHandler(error),
  });

  return {
    open,
    handleToggleDrawer,
    balance: data?.balance,
  };
};

export default useWalletNavOnMobile;
