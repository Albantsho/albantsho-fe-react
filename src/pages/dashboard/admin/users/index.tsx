import { Typography } from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import useAuthApi from "apis/Auth.api";
import AllUsersList from "components/Dashboard/Admin/Users/Index/UsersList/AllUsersList";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";

const UsersPage: NextPageWithLayout = () => {
  const { getAllUser } = useAuthApi();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { query, push } = useRouter();

  const { data, isLoading } = useQuery(
    ["userInformationForAdmin", currentPage, searchQuery],
    () => getAllUser(queryString.stringify(query), searchQuery),
    {
      onError: (err) => {
        errorHandler(err);
      },
      refetchInterval: 100000,
      refetchIntervalInBackground: true,
    }
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
    push(`?page=${page}`, undefined, { shallow: true });
  };

  // useEffect(() => {
  //   async function getAllUsersFunc() {
  //     try {
  //       setLoading(true);
  //       const res = await getAllUser(queryString.stringify(query), searchQuery);
  //       setPageCount(res.data.pagesCount);
  //       setUsersList(res.data.users);
  //       setCurrentPage(res.data.currenPage);
  //       setLoading(false);
  //     } catch (error) {
  //       ("");
  //     }
  //   }
  //   getAllUsersFunc();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [handleSearch, query]);

  return (
    <>
      <Head>
        <title>Albantsho || Admin Users</title>
      </Head>
      <Typography
        variant="h4"
        className="text-primary-700 futura font-normal leading-normal"
      >
        User List
      </Typography>
      <AdminDashboardSearch placeholder="Search" handleSearch={handleSearch} />
      {!isLoading && data ? (
        <>
          <AllUsersList usersList={data.users} />
          {data.pagesCount > 1 && (
            <CustomPaginationComponent
              pageCount={data.pagesCount}
              handleActivePage={handleActivePage}
              currentPage={currentPage}
            />
          )}
        </>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

UsersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default UsersPage;
