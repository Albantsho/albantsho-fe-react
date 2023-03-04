import useWalletApi from "apis/Wallet.api";
import { useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const useMobileNavDashboard = () => {
  const [open, setOpen] = useState(false);
  const { getWalletBalance } = useWalletApi();

  const { data } = useQuery("balance", () => getWalletBalance(), {
    onError: (error) => errorHandler(error),
  });

  const handleToggleDrawer = (open: boolean) => () => setOpen(open);

  return {
    open,
    handleToggleDrawer,
    balance: data?.balance,
  };
};

export default useMobileNavDashboard;
