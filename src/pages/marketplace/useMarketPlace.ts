import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import { IScript } from "interfaces/script";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";

const useMarketPlace = () => {
  const user = useUserStore((state) => state.user);
  const [scripts, setScripts] = useState<Array<IScript>>([]);
  const [loading, setLoading] = useState(false);
  const { getAllScripts, getProducerAllScripts } = useScriptsApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        setLoading(true);
        if (!user || user.user_type === "writer") {
          const res = await getAllScripts(queryString.stringify(query));
          setScripts(res.data.scripts);
          setLoading(false);
        }
        if (user.user_type === "producer") {
          const res = await getProducerAllScripts(queryString.stringify(query));
          setScripts(res.data.scripts);
          setLoading(false);
        }
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsFunc();
  }, [query!]);

  return { scripts, loading };
};

export default useMarketPlace;
