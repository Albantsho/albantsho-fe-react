import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
    </>
  );
};

Login.getLayout = (page) => (
  <GeneralLayout title="Under Construction">{page}</GeneralLayout>
);

export default Login;
