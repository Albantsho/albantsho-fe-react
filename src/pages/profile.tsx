import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useAuthApi from "apis/Auth.api";
import BasicPersonalInformation from "components/Profile/BasicPersonalInformation/BasicPersonalInformation";
import ConnectWallet from "components/Profile/ConnectWallet/ConnectWallet";
import PersonalWithdrawalDetails from "components/Profile/PersonalWithdrawalDetails/PersonalWithdrawalDetails";
import { IUserProfile } from "interfaces/user";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const Profile = () => {
  const { getUserProfile } = useAuthApi();
  const [userProfile, setUserProfile] = useState<IUserProfile>(
    {} as IUserProfile
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserProfileFunc() {
      try {
        setLoading(true);
        const res = await getUserProfile();
        setUserProfile(res.data.profile);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getUserProfileFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Profile</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <div className="px-5 sm:py-10 py-5 bg-[#f6f8fc] min-h-screen">
          <div className="rounded-md bg-white space-y-2 shadow-primary py-7 mx-auto px-5 sm:px-10 md:py-12 lg:px-20 lg:py-20 max-w-[950px]">
            <BasicPersonalInformation userProfile={userProfile} />
            <PersonalWithdrawalDetails userProfile={userProfile} />
            <ConnectWallet />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
