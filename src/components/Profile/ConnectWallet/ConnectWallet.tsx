import { Avatar, Button, Divider, Typography } from "@mui/material";
import useUserStore from "app/user.store";
import { ethers } from "ethers";
import { useState } from "react";

const ConnectWallet = () => {
  const user = useUserStore((state) => state.user);
  const [isConnected, setIsConnected] = useState(false);

  async function connectWallet() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsConnected(false);
    }
  }

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
      {isConnected ? (
        "connected"
      ) : (
        <Button onClick={() => connectWallet()}>connect</Button>
      )}
    </div>
  );
};

export default ConnectWallet;
