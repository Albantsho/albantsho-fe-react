import useScriptsApi from "apis/Scripts.api";
import { IScript } from "interfaces/script";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import routes from "routes/routes";

const useMarketPlace = () => {
  const [scripts, setScripts] = useState<Array<IScript>>([]);
  const [loading, setLoading] = useState(false);
  const { getAllScripts } = useScriptsApi();
  const { query, push } = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        setLoading(true);
        const res = await getAllScripts(queryString.stringify(query));
        setScripts(res.data.scripts);
        setPageCount(res.data.pagesCount);
        setCurrentPage(res.data.currentPage);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }
    getScriptsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
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
    scripts,
    loading,
    currentPage,
    pageCount,
    handleActivePage,
    activeTab,
    pushActiveRoute,
  };
};

export default useMarketPlace;
