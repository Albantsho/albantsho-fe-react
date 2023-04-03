import nftLogo from "@assets/images/logo.png";
import {
  Box,
  Button,
  Card,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import WalletNav from "@shared/WalletNav/WalletNav";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import routes from "routes/routes";
import useInvites from "./useInvites";

const Invites = () => {
  const {
    acceptInviteFunc,
    rejectInviteFunc,
    invitesData,
    isLoadingInvites,
    loadingAcceptInvite,
    loadingRejectInvite,
    collaboratorsData,
  } = useInvites();

  return (
    <>
      <Head>
        <title>Albantsho || Invites</title>
      </Head>
      <WalletNav color="inherit" position="static" />
      <div className="px-5 sm:px-10 py-10">
        <Typography variant="h4" color="primary">
          Invites List
        </Typography>
        <Box
          component="div"
          className="gap-4 mt-8 mb-16 grid "
          gridTemplateColumns={{
            xs: "repeat(auto-fill, minmax(250px, auto))",
          }}
        >
          {invitesData && collaboratorsData && !isLoadingInvites ? (
            <>
              {invitesData.invites
                .filter((invite) => !invite.rejected && !invite.accepted)
                .map((invite) => (
                  <div
                    key={invite._id}
                    className="flex flex-col gap-6 border-4 border-t-secondary-700 border-l-secondary-700 border-r-primary-700 border-b-primary-700 rounded-3xl justify-between items-center px-6 py-8  max-w-[280px] shadow-primary shadow-secondary-300"
                  >
                    <div className="w-32 h-32 bg-secondary-50 flex justify-center items-center mx-auto rounded-full">
                      <div className="w-20 h-20">
                        <Image
                          src={nftLogo}
                          className="rotate-90"
                          alt="nft Logo"
                        />
                      </div>
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className="text-primary-700 text-center font-medium"
                      >
                        you've been invited by
                        {` ${invite.inviter.firstName} ${invite.inviter.lastName}.`}{" "}
                        collaborate on {invite.script.title}.
                      </Typography>
                    </div>
                    <div className="space-x-2">
                      {!invite.accepted ? (
                        <>
                          <IconButton
                            disabled={loadingAcceptInvite}
                            onClick={acceptInviteFunc(invite._id)}
                            className="w-16 h-16 text-success-500 hover:bg-success-50"
                          >
                            <MdOutlineDone className="w-10 h-10" />
                          </IconButton>
                          <IconButton
                            disabled={loadingRejectInvite}
                            onClick={rejectInviteFunc(invite._id)}
                            className="w-16 h-16 text-error-500 hover:bg-error-50"
                          >
                            <AiOutlineClose className="w-10 h-10" />
                          </IconButton>
                        </>
                      ) : (
                        <Link
                          passHref
                          legacyBehavior
                          href={routes.script.dynamicUrl(invite.script._id)}
                        >
                          <Button
                            variant="outlined"
                            className="py-3 px-4 font-semibold"
                          >
                            go to script Page
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              {collaboratorsData.scripts.map((script) => (
                <div
                  key={script._id}
                  className="flex flex-col gap-6 border-4 border-t-secondary-700 border-l-secondary-700 border-r-primary-700 border-b-primary-700 rounded-3xl justify-between items-center px-6 py-8  max-w-[280px] shadow-primary shadow-secondary-300"
                >
                  <div className="w-32 h-32 bg-secondary-50 flex justify-center items-center mx-auto rounded-full">
                    <div className="w-20 h-20">
                      <Image
                        src={nftLogo}
                        className="rotate-90"
                        alt="nft Logo"
                      />
                    </div>
                  </div>
                  <div>
                    <Typography
                      variant="body1"
                      className="text-primary-700 text-center font-medium"
                    >
                      you've been invited by
                      {` ${script.author.firstName} ${script.author.lastName}.`}{" "}
                      collaborate on {script.title}.
                    </Typography>
                  </div>
                  <div className="space-x-2">
                    <Link
                      passHref
                      legacyBehavior
                      href={routes.script.dynamicUrl(script._id)}
                    >
                      <Button
                        variant="outlined"
                        className="py-3 px-4 font-semibold"
                      >
                        go to script Page
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            Array.from(new Array(3)).map((_, index) => (
              <Card
                key={index}
                className="py-8 rounded-3xl shadow-primary shadow-secondary-300"
                sx={{
                  boxShadow: "0px 2px 7px rgba(117, 88, 162, 0.15)",
                  maxWidth: 280,
                }}
              >
                <Skeleton
                  sx={{ height: 128, width: 128 }}
                  animation="pulse"
                  variant="circular"
                  className="mx-auto mb-6"
                />
                <Skeleton
                  className="mx-5"
                  animation="pulse"
                  height={20}
                  style={{ marginBottom: 2, marginTop: 6 }}
                />
                <Skeleton
                  className="mx-5"
                  animation="pulse"
                  height={20}
                  style={{ marginBottom: 6, marginTop: 2 }}
                />
                <Skeleton
                  className="mx-auto mb-auto mt-16 rounded-sm"
                  variant="rectangular"
                  animation="pulse"
                  height={40}
                  width={130}
                />
              </Card>
            ))
          )}
        </Box>
      </div>
    </>
  );
};

export default Invites;
