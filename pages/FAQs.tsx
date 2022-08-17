import Layout from "@shared/Layouts/Layout";
import { NextPageWithLayout } from "./_app";

const FAQs: NextPageWithLayout = () => {
  return <div></div>;
};

FAQs.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default FAQs;
