import useScriptsApi from "apis/Scripts.api";
import { IScript } from "interfaces/script";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

const useMarketPlace = () => {
  const [scripts, setScripts] = useState<Array<IScript>>([]);
  const [loading, setLoading] = useState(false);
  const { getAllScripts } = useScriptsApi();
  const { query, push } = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

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
        errorHandler(error);
      }
    }
    getScriptsFunc();
  }, [query!]);

  const handleActivePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    !query
      ? push(routes.marketplaceTabs.url("", `?page=${page}`), undefined, {
          shallow: true,
        })
      : push(
          routes.marketplaceTabs.url(`?sort=${query.sort}`, `&page=${page}`),
          undefined,
          { shallow: true }
        );
  };

  return { scripts, loading, currentPage, pageCount, handleActivePage };
};

export default useMarketPlace;
