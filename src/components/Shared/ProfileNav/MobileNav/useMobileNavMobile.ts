import useWalletApi from "apis/Wallet.api";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";

const useMobileNavMobile = () => {
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const { getWalletBalance } = useWalletApi();

  const handleToggleDrawer = (open: boolean) => () => setOpen(open);

  useEffect(() => {
    async function getWalletBalanceFunc() {
      try {
        const res = await getWalletBalance();
        setBalance(res.data.balance);
      } catch (error) {
        errorHandler(error);
      }
    }

    getWalletBalanceFunc();
  }, []);

  return {
    open,
    handleToggleDrawer,
    balance,
  };
};

export default useMobileNavMobile;
