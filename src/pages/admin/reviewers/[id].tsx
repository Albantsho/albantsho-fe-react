import beauty from "@assets/images/beauty.jpg";
import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import BreadcrumbsRequestInfo from "components/Admin/Reviewers/RequestInfo/BreadcrumbsRequestInfo/BreadcrumbsRequestInfo";
import OneRequest from "components/Admin/Reviewers/RequestInfo/OneRequest/OneRequest";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";

const listCurrentRequests = [
  {
    id: 1,
    image: beauty,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 2,
    image: beauty,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
  },
  {
    id: 3,
    image: beauty,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 4,
    image: beauty,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type A",
  },
  {
    id: 5,
    image: beauty,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Type B",
  },
];

const InformationReviewPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const foundedRequest = listCurrentRequests.find(
    (request) => request.id === +query.id!
  );
  return (
    <>
      <Head>
        <title>Albantsho || Admin Add blog</title>
      </Head>
      <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-20 lg:pb-24 px-5 lg:px-14 max-w-5xl">
        <BreadcrumbsRequestInfo title={foundedRequest?.title} />
        <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
        <OneRequest requestInfo={foundedRequest} />
      </div>
    </>
  );
};

InformationReviewPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationReviewPage;
