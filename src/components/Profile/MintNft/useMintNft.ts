declare const window: any;

import useNftApi from "apis/nft.api";
import { ethers } from "ethers";
import { INft } from "interfaces/nft";
import { useEffect, useState } from "react";

const useMintNft = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [nftList, setNftList] = useState<Array<INft>>([]);
  const { getAllUserNfts } = useNftApi();
  const [balance, setBalance] = useState("");

  const connectWalletAddress = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(account);
  };

  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setLoading(true);
    const balance = await provider.getBalance(walletAddress);
    setBalance(ethers.utils.formatEther(balance));
    setLoading(false);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, "abi", signer);
  };

  useEffect(() => {
    async function getNftsFunc() {
      const res = await getAllUserNfts();
      setNftList(res.data.nfts);
    }
    getNftsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    nftList,
    balance,
    walletAddress,
    connectWalletAddress,
    getBalance,
  };
};

export default useMintNft;
