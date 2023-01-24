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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
      console.log("🚀 ~ file: MintNft.tsx:29 ~ getNftsFunc ~ res", res);
      setNftList(res.data.nfts);
    }
    getNftsFunc();
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
