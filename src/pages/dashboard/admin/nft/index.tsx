import { Typography } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import NFTList from "components/Dashboard/Admin/NFTList/NFTList";
import { debounce } from "lodash";
import Head from "next/head";
import { useCallback, useState } from "react";
import { NextPageWithLayout } from "../../../_app";

const NFTPage: NextPageWithLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  return (
    <>
      <Head>
        <title>Albantsho || Admin NFT</title>
      </Head>
      <Typography
        variant="h4"
        className="text-primary-700 futura font-normal leading-normal"
      >
        NFT List
      </Typography>
      <AdminDashboardSearch
        placeholder="Search for wallet"
        handleSearch={handleSearch}
      />
      <NFTList searchQuery={searchQuery} />
    </>
  );
};

NFTPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default NFTPage;
