import { Button, IconButton, Typography } from "@mui/material";
import WalletNav from "@shared/WalletNav/WalletNav";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { DotLoader } from "react-spinners";
import routes from "routes/routes";
import useInvites from "./useInvites";

const Invites = () => {
  const { acceptInviteFunc, invitesList, loading, rejectInviteFunc } =
    useInvites();

  return (
    <>
      <Head>
        <title>Albantsho || Invites</title>
      </Head>
      <WalletNav color="inherit" position="static" />
      <div className="px-5 sm:px-10 py-10 overflow-hidden">
        <Typography variant="h4" color="primary">
          Invites List
        </Typography>
        {loading ? (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        ) : (
          <div className="flex flex-col mt-6 gap-4">
            {invitesList
              .filter((invite) => !invite.rejected)
              .map((invite) => (
                <div
                  key={invite._id}
                  className="flex flex-wrap gap-3 border justify-between items-center p-2"
                >
                  <div>
                    <Typography variant="body1" className="text-primary-700">
                      you've been invited by
                      {`${invite.inviter.firstName} ${invite.inviter.lastName}`}
                      <br />
                      collaborate on {invite.script.title}.
                    </Typography>
                  </div>
                  <div className="space-x-2">
                    {!invite.accepted ? (
                      <>
                        {" "}
                        <IconButton
                          onClick={acceptInviteFunc(invite._id)}
                          className="w-9 h-9 text-success-500 hover:bg-success-50"
                        >
                          <MdOutlineDone />
                        </IconButton>
                        <IconButton
                          onClick={rejectInviteFunc(invite._id)}
                          className="w-9 h-9 text-error-500 hover:bg-error-50"
                        >
                          <AiOutlineClose />
                        </IconButton>
                      </>
                    ) : (
                      <Link
                        passHref
                        legacyBehavior
                        href={routes.script.dynamicUrl(invite.script._id)}
                      >
                        <Button>go to script Page</Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Invites;
