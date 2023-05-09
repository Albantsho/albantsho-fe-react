import useScriptsApi from "apis/Scripts.api";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import routes from "routes/routes";

const useMarketplace = () => {
  const { getAllScripts } = useScriptsApi();
  const { query, push } = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const { data: scriptsData, isLoading: loadingGetScripts } = useQuery(
    ["script", query],
    () => getAllScripts(queryString.stringify(query)),
    {
      onSuccess: (data) => setCurrentPage(data.currentPage),
    }
  );

  useEffect(() => {
    if (query.rate) setActiveTab(1);
    else if (query.featured) setActiveTab(2);
    else if (query.trending) setActiveTab(3);
    else setActiveTab(0);
  }, [query]);

  const pushActiveRoute = (query: string) => () => {
    push(
      routes.marketplaceTabs.url(query, currentPage > 1 ? `${currentPage}` : "")
    );
  };

  const handleActivePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    !query.rate && !query.featured && !query.trending
      ? push(routes.marketplaceTabs.url("", `?page=${page}`), undefined, {
        shallow: true,
        scroll: false,
      })
      : query.rate
        ? push(
          routes.marketplaceTabs.url("?rate=true", `&page=${page}`),
          undefined,
          { shallow: true }
        )
        : query.featured
          ? push(
            routes.marketplaceTabs.url(`?featured=true`, `&page=${page}`),
            undefined,
            { shallow: true }
          )
          : push(
            routes.marketplaceTabs.url(`?trending=true`, `&page=${page}`),
            undefined,
            { shallow: true }
          );
  };

  return {
    scriptsData,
    loadingGetScripts,
    currentPage,
    handleActivePage,
    activeTab,
    pushActiveRoute,
  };
};

export default useMarketplace;
