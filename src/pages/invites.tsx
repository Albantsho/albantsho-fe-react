import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";
import { useEffect, useState } from "react";
import useInvite from "apis/Invite.api";
import errorHandler from "utils/error-handler";

const Invites = () => {
  const { allInvite } = useInvite();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInvites() {
      try {
        setLoading(true);
        const res = await allInvite();
        console.log(res);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getInvites();
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Invites</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <div className="px-5 sm:px-10 overflow-hidden">
        <div className="relative"></div>
      </div>
    </>
  );
};

export default Invites;
