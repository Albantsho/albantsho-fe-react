declare const window: any;

import nftLogo from "@assets/images/logo.png";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import useMintNft from "./useMintNft";

const MintNft = () => {
  const {
    connectWalletAddress,
    loading,
    nftList,
    walletAddress,
    correctNetwork,
    mintNft,
    changeToRightChain,
  } = useMintNft();

  return (
    <form>
      <Typography variant="h4" className="futura font-medium text-primary-700">
        Nft Details
      </Typography>
      <Divider />
      <div className="flex flex-col md:mt-8 pt-8 gap-3 gap-y-8 md:flex-row md:gap-x-20">
        <div className="flex flex-col gap-2 self-center items-center">
          <div className="w-[102px] h-[102px] md:w-44 md:h-44 bg-purple-100 flex justify-center items-center mx-auto rounded-full">
            <div className="w-14 h-14 md:w-24 md:h-24">
              <Image src={nftLogo} alt="nft Logo" />
            </div>
          </div>
          {!walletAddress && (
            <div>
              <Btn className="px-4 py-2" onClick={connectWalletAddress}>
                Connect wallet
              </Btn>
            </div>
          )}
        </div>

        <div className="gap-y-5 md:gap-y-6 flex md:flex-1">
          {correctNetwork ? (
            walletAddress ? (
              nftList.length >= 1 ? (
                window.ethereum ? (
                  nftList.map((nft) => (
                    <Box
                      key={nft._id}
                      gridTemplateColumns={{
                        xs: "repeat(auto-fill, minmax(200px, auto))",
                      }}
                      className="mt-2 xl:mt-8 gap-8"
                    >
                      <div className="border rounded-lg border-primary-700 bg-primary-50 p-4 flex flex-col items-center justify-between min-h-[200px]">
                        <div className="w-24 h-24 bg-purple-100 flex justify-center items-center mx-auto rounded-full">
                          <div className="w-16 h-16 flex justify-center items-center">
                            <Image src={nftLogo} alt="nft Logo" />
                          </div>
                        </div>
                        {!nft.transaction ? (
                          <LoadingButton
                            variant="contained"
                            disableElevation
                            loading={loading}
                            onClick={mintNft(nft._id)}
                            className="py-2 px-4"
                          >
                            Mint Nft
                          </LoadingButton>
                        ) : (
                          <Button
                            href={`https://testnet.snowtrace.io/tx/${nft.transaction}`}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            variant="outlined"
                            className="py-2 px-4"
                          >
                            details
                          </Button>
                        )}
                      </div>
                    </Box>
                  ))
                ) : (
                  <div className="py-6 rounded-md border-2 border-dashed px-4 m-auto md:my-auto border-warning-300  bg-warning-50/50">
                    <Typography className="text-warning-500">
                      Please install Meta mask
                    </Typography>
                    <a
                      className="text-warning-500 font-semibold text-center mx-auto w-24 block"
                      href="https://metamsk.io/download.html"
                    >
                      Meta Mask
                    </a>
                  </div>
                )
              ) : (
                <div className="py-6 rounded-md border-2 border-dashed px-4 m-auto md:my-auto border-primary-300  bg-primary-50/50">
                  <Typography className="text-primary-500">
                    You don't have NFT for mint
                  </Typography>
                </div>
              )
            ) : (
              ""
            )
          ) : (
            <div className="py-6 rounded-md border-2 border-dashed px-4 m-auto md:my-auto border-primary-300  bg-primary-50/50">
              <Typography className="text-primary-500">
                Please Enter Current Network{" "}
                {
                  <span
                    onClick={changeToRightChain}
                    className="cursor-pointer font-bold"
                  >
                    (AVAX)
                  </span>
                }
              </Typography>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default MintNft;
