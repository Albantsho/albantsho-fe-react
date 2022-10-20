import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import Questions from "components/FAQs/Questions/Questions";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const FAQs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || FAQ’s</title>
      </Head>
      <Questions />
    </>
  );
};

FAQs.getLayout = (page: React.ReactElement) => (
  <GeneralLayout title="FAQ’s">{page}</GeneralLayout>
);

export default FAQs;
