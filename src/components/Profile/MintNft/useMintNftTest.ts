declare const window: any;

// import axios from "axios";
// import { ethers } from "ethers";
// import { useState, useEffect } from "react";
// import { nftContractAddress } from "../config.js";
// import NFT from "../utils/EternalNFT.json";

const useMintNftTest = () => {
  // const [mintedNFT, setMintedNFT] = useState(null);
  // const [miningStatus, setMiningStatus] = useState<null | number>(null);
  // const [loadingState, setLoadingState] = useState(0);
  // const [txError, setTxError] = useState("");
  // const [currentAccount, setCurrentAccount] = useState("");
  // const [correctNetwork, setCorrectNetwork] = useState(false);

  // // Checks if wallet is connected
  // const checkIfWalletIsConnected = async () => {
  //   const { ethereum } = window;
  //   if (ethereum) {
  //     console.log("Got the ethereum obejct: ", ethereum);
  //   } else {
  //     console.log("No Wallet found. Connect Wallet");
  //   }

  //   const accounts = await ethereum.request({ method: "eth_accounts" });

  //   if (accounts.length !== 0) {
  //     console.log("Found authorized Account: ", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //   } else {
  //     console.log("No authorized account found");
  //   }
  // };

  // // Calls Metamask to connect wallet on clicking Connect Wallet button
  // const connectWallet = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (!ethereum) {
  //       console.log("Metamask not detected");
  //       return;
  //     }
  //     const chainId = await ethereum.request({ method: "eth_chainId" });
  //     console.log("Connected to chain:" + chainId);

  //     const rinkebyChainId = "0x4";

  //     const devChainId = 1337;
  //     const localhostChainId = `0x${Number(devChainId).toString(16)}`;

  //     if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
  //       alert("You are not connected to the Rinkeby Testnet!");
  //       return;
  //     }

  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });

  //     console.log("Found account", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //   } catch (error) {
  //     console.log("Error connecting to metamask", error);
  //   }
  // };

  // // Checks if wallet is connected to the correct network
  // const checkCorrectNetwork = async () => {
  //   const { ethereum } = window;
  //   const chainId = await ethereum.request({ method: "eth_chainId" });
  //   console.log("Connected to chain:" + chainId);

  //   const rinkebyChainId = "0x4";

  //   const devChainId = 1337;
  //   const localhostChainId = `0x${Number(devChainId).toString(16)}`;

  //   if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
  //     setCorrectNetwork(false);
  //   } else {
  //     setCorrectNetwork(true);
  //   }
  // };

  // useEffect(() => {
  //   checkIfWalletIsConnected();
  //   checkCorrectNetwork();
  // }, []);

  // // Creates transaction to mint NFT on clicking Mint Character button
  // const mintCharacter = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(
  //         nftContractAddress,
  //         NFT.abi,
  //         signer
  //       );

  //       const nftTx = await nftContract.createEternalNFT();
  //       console.log("Mining....", nftTx.hash);
  //       setMiningStatus(0);

  //       const tx = await nftTx.wait();
  //       setLoadingState(1);
  //       console.log("Mined!", tx);
  //       const event = tx.events[0];
  //       const value = event.args[2];
  //       const tokenId = value.toNumber();

  //       console.log(
  //         `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
  //       );

  //       getMintedNFT(tokenId);
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error: any) {
  //     console.log("Error minting character", error);
  //     setTxError(error.message as string);
  //   }
  // };

  // // Gets the minted NFT data
  // const getMintedNFT = async (tokenId: string) => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(
  //         nftContractAddress,
  //         NFT.abi,
  //         signer
  //       );

  //       const tokenUri = await nftContract.tokenURI(tokenId);
  //       const data = await axios.get(tokenUri);
  //       const meta = data.data;

  //       setMiningStatus(1);
  //       setMintedNFT(meta.image);
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     setTxError(error.message as string);
  //   }
  // };

  return {};
};

export default useMintNftTest;
