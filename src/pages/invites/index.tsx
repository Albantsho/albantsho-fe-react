import { Typography } from "@mui/material";
import WalletNav from "@shared/WalletNav/WalletNav";
import Invites from "components/Invites/Invites";
import Head from "next/head";

const InvitesPage = () => {
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
        <Invites />
      </div>
    </>
  );
};

export default InvitesPage;
