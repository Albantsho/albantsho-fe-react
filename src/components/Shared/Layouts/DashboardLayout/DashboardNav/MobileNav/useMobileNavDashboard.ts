import useWalletApi from "apis/Wallet.api";
import { useEffect, useState } from "react";

const useMobileNavDashboard = () => {
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
        ("");
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

export default useMobileNavDashboard;
