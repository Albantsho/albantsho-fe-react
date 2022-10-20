import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Education: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Education</title>
      </Head>
    </>
  );
};

Education.getLayout = (page) => (
  <GeneralLayout title="Under Construction">{page}</GeneralLayout>
);

export default Education;
