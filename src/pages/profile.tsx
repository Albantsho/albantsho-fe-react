import Loader from "@shared/Loader/Loader";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useAuthApi from "apis/Auth.api";
import BasicPersonalInformation from "components/Profile/BasicPersonalInformation/BasicPersonalInformation";
import MintNft from "components/Profile/MintNft/MintNft";
import PersonalWithdrawalDetails from "components/Profile/PersonalWithdrawalDetails/PersonalWithdrawalDetails";
import Head from "next/head";
import { useQuery } from "react-query";

const Profile = () => {
  const { getUserProfile } = useAuthApi();
  const { data, isLoading } = useQuery(["user"], () => getUserProfile());

  return (
    <>
      <Head>
        <title>Albantsho || Profile</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      {data && data.profile && !isLoading ? (
        <div className="px-5 sm:py-10 py-5 bg-[#f6f8fc] min-h-screen">
          <div className="rounded-md bg-white space-y-2 shadow-primary py-7 mx-auto px-5 sm:px-10 md:py-12 lg:px-20 lg:py-20 max-w-[950px]">
            <BasicPersonalInformation userProfile={data.profile} />
            <PersonalWithdrawalDetails userProfile={data.profile} />
            {data.profile.userType === "writer" && <MintNft />}
          </div>
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[85vh]" />
      )}
    </>
  );
};

export default Profile;
