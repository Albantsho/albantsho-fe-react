import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import Loader from "@shared/Loader/Loader";
import useContact, { type IData_getContacts } from "apis/Contact.api";
import ContactList from "components/Dashboard/Admin/ContactList/ContactList";
import TabButtons from "components/Dashboard/Admin/Contacts/TabButtons/TabButtons";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import routes from "routes/routes";
import { NextPageWithLayout } from "../../../_app";

const ContactsPage: NextPageWithLayout = () => {
  const { allContacts } = useContact();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { query, push } = useRouter();
  const { data: contactData, isLoading: isLoadingGetAllContact } = useQuery<
    IData_getContacts,
    Error
  >(["contact", currentPage, searchQuery, query.answered], () =>
    allContacts(
      `${currentPage}`,
      query.answered ? `${query.answered}` : "false",
      searchQuery
    )
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
    !query.answered
      ? push(
          routes.contactsAdminDashboardTabs.url("", `?page=${page}`),
          undefined,
          { shallow: true }
        )
      : query.answered === "true"
      ? push(
          routes.blogsAdminDashboardTabs.url(`?answered=true`, `&page=${page}`),
          undefined,
          { shallow: true }
        )
      : push(
          routes.blogsAdminDashboardTabs.url(
            "?answered=false",
            `?page=${page}`
          ),
          undefined,
          { shallow: true }
        );
  };

  return (
    <>
      <Head>
        <title>Albantsho || Admin Contact</title>
      </Head>

      <TabButtons />
      <AdminDashboardSearch
        placeholder="Search for Contacts"
        handleSearch={handleSearch}
      />
      {!isLoadingGetAllContact && contactData ? (
        <ContactList
          contacts={contactData.contacts}
          pagesCount={contactData.pagesCount}
          currentPage={currentPage}
          handleActivePage={handleActivePage}
        />
      ) : (
        <Loader setCustomHeight="min-h-[62vh]" />
      )}
    </>
  );
};

ContactsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default ContactsPage;
