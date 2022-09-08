import DashboardNav from "@shared/Layouts/DashboardLayout/Nav/DashboardNav";
import BasicPersonalInformation from "components/Profile/BasicInfoPerson/BasicPersonalInformation";
import PersonalWithdrawalDetails from "components/Profile/PersonalWithdrawalDetails/PersonalWithdrawalDetails";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Profile </title>
      </Head>
      <DashboardNav color="inherit" position="static" />
      <main className="px-5 sm:px-10 pt-5 bg-[#E5E5E5] md:pb-16">
        <div className="rounded-md bg-white shadow-sm py-7 mx-auto px-3 md:px-10 md:py-12 lg:px-20 lg:py-20 max-w-[950px]">
          <BasicPersonalInformation />
          <PersonalWithdrawalDetails />
        </div>
      </main>
    </>
  );
};

export default Profile;
