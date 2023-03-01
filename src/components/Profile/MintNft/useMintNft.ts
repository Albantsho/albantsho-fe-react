// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

import useNftApi from "apis/nft.api";
import { ethers } from "ethers";
import { INft } from "interfaces/nft";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NFT from "../../../config/albantsho-abi.json";

const nftContractAddress = "0x3DcF9933A9584B9f3c6aB499aD942482bff80CFD";

const useMintNft = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(true);
  const [nftList, setNftList] = useState<Array<INft>>([]);
  const { getAllUserNfts, mintNfts } = useNftApi();

  //? Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWalletAddress = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);

      // window.ethereum.on("chainChanged", (chain: string) => {
      //   if (chain !== "0x38") {
      //     setCorrectNetwork(false);
      //     return;
      //   }
      // });
      window.ethereum.on("chainChanged", (chain: string) => {
        if (chain !== "0xa869") {
          setCorrectNetwork(false);
          return;
        }
      });
    } catch (error) {
      toast.error("Error connecting to metamask");
    }
  };

  //? Calls Metamask to current connect wallet on mount component
  const getCurrentWalletAddressConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error("Metamask not detected");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        // window.ethereum.on("chainChanged", (chain: string) => {
        //   if (chain !== "0x38") {
        //     setCorrectNetwork(false);
        //     return;
        //   }
        // });
        window.ethereum.on("chainChanged", (chain: string) => {
          if (chain !== "0xa869") {
            setCorrectNetwork(false);
            return;
          }
        });
      }
    } catch (error) {
      toast.error("Error connecting to metamask");
    }
  };

  const changeToRightChain = async () => {
    // window.ethereum.request({
    //   method: "wallet_addEthereumChain",
    //   params: [
    //     {
    //       chainId: "0x38",
    //       chainName: "BNB Smart Chain (previously Binance Smart Chain Mainnet)",
    //       nativeCurrency: {
    //         name: "BNB",
    //         symbol: "BNB",
    //         decimals: 56,
    //       },
    //       rpcUrls: ["https://bsc-dataseed.binance.org/"],
    //       blockExplorerUrls: ["https://bscscan.com"],
    //     },
    //   ],
    // });
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0xa869",
          chainName: "Fuji (C-Chain)",
          nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 43113,
          },
          rpcUrls: ["https://api.avax-test.network/ext/C/rpc"],
          blockExplorerUrls: ["https://testnet.snowtrace.io"],
        },
      ],
    });
  };

  //? Creates transaction to mint NFT on clicking Mint Character button
  const mintNft = (nftId: string) => async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(
        nftContractAddress,
        NFT.output.abi,
        signer
      );
      setLoading(true);
      const tx = await nftContract.safeMint(
        walletAddress,
        ethers.utils.parseEther("0.25")
      );
      const res = await tx.wait();
      const nftListCopy = [...nftList];
      const foundNftIndex = nftListCopy.findIndex((n) => n._id === nftId);
      const foundNft = nftListCopy[foundNftIndex];
      foundNft.transaction = res.transactionHash;
      setNftList(nftListCopy);
      await mintNfts({
        nftId,
        tokenId: `${parseInt(res.logs[0].topics[3], 16)}`,
        transaction: res.transactionHash,
      });
      toast.success("Successfully minted !");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.reason ? error.reason : "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setWalletAddress(accounts[0]);
      });
      window.ethereum.on("chainChanged", (chain: string) => {
        // if (chain !== "0x38") {
        //   setCorrectNetwork(false);
        // } else {
        //   setCorrectNetwork(true);
        // }
        if (chain !== "0xa869") {
          setCorrectNetwork(false);
        } else {
          setCorrectNetwork(true);
        }
      });
    }
  });

  //? get all nfts user
  useEffect(() => {
    getCurrentWalletAddressConnected();
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
    walletAddress,
    connectWalletAddress,
    correctNetwork,
    mintNft,
    changeToRightChain,
  };
};

export default useMintNft;
