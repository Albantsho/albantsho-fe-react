import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useAuthApi from "apis/Auth.api";
import BasicPersonalInformation from "components/Profile/BasicInfoPerson/BasicPersonalInformation";
import PersonalWithdrawalDetails from "components/Profile/PersonalWithdrawalDetails/PersonalWithdrawalDetails";
import Head from "next/head";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";

const Profile = () => {
  const { getUserProfile } = useAuthApi();
  const [first, setfirst] = useState();

  useEffect(() => {
    async function getUserProfileFunc() {
      try {
        const res = await getUserProfile();
      } catch (error) {
        errorHandler(error);
      }
    }

    getUserProfileFunc();
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Profile </title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <div className="px-5 sm:py-10 py-5 bg-[#f6f8fc] min-h-screen">
        <div className="rounded-md bg-white space-y-2 shadow-primary py-7 mx-auto px-5 sm:px-10 md:py-12 lg:px-20 lg:py-20 max-w-[950px]">
          <BasicPersonalInformation />
          <PersonalWithdrawalDetails />
        </div>
      </div>
    </>
  );
};

export default Profile;
