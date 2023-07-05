import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import Loader from "@shared/Loader/Loader";
import useWithdrawApi from "apis/withdraw.api";
import TabButtons from "components/Dashboard/Admin/Withdraws/TabButtons/TabButtons";
import Withdraws from "components/Dashboard/Admin/Withdraws/Withdraws";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { NextPageWithLayout } from "../../../_app";

const controller = new AbortController();

const WithdrawsPage: NextPageWithLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { query } = useRouter();

  const { getAllWithdrawsForAdmin } = useWithdrawApi(controller);
  const { data: withdrawsData, isLoading: isLoadingGetAllWithdraw, refetch} = useQuery(
    ["withdraws", query.status, currentPage, searchQuery],
    () =>
      getAllWithdrawsForAdmin({
        limit: 15,
        page: currentPage,
        status: query["status"] ? (query["status"] as string) : "onchecking",
        search: searchQuery,
      })
  );

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

  const handleActivePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Albantsho || Admin Withdraw</title>
      </Head>

      <TabButtons />
      <AdminDashboardSearch
        placeholder="Search for Withdraws"
        handleSearch={handleSearch}
      />
      {!isLoadingGetAllWithdraw && withdrawsData ? (
        <>
        <Withdraws withdraws={withdrawsData.withdraws} refetch={refetch} />
        {withdrawsData.pagesCount > 1 && (
              <CustomPaginationComponent
                pageCount={withdrawsData.pagesCount}
                handleActivePage={handleActivePage}
                currentPage={currentPage}
              />
            )}
        </>
      ) : (
        <Loader setCustomHeight="min-h-[62vh]" />
      )}
    </>
  );
};

WithdrawsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default WithdrawsPage;
