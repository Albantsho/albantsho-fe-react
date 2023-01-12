import { Avatar, Button, Divider, Typography } from "@mui/material";
import useUserStore from "app/user.store";
import { ethers } from "ethers";
import { useState } from "react";

const ConnectWallet = () => {
  const user = useUserStore((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  console.log(errorMessage);
  console.log(defaultAccount);
  console.log(userBalance);

  const connectWallet = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.ethereum) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const allAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setDefaultAccount(allAccounts[0]);
        getUserBalanceAccount(defaultAccount);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Please Install Metamask");
    }
  };

  const getUserBalanceAccount = async (accountAddress: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const balanceAccount = await window.ethereum.request({
      method: "eth_getBalance",
      params: [String(accountAddress)],
    });
    setUserBalance(ethers.utils.formatEther(balanceAccount));
  };

  return (
    <div>
      <Typography variant="h4" className="futura font-medium text-primary-700">
        Wallet Details
      </Typography>
      <Divider className="mb-2" />

      <Avatar
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user.image}`}
        alt={user.firstName}
        className="w-20 h-20"
      />
      <Button onClick={connectWallet}>Connect Wallet</Button>
    </div>
  );
};

export default ConnectWallet;
