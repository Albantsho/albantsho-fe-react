import useScriptsApi from "apis/Scripts.api";
import { IBidScript } from "interfaces/script";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";

const useListings = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);

  const [scripts, setScripts] = useState<Array<IBidScript>>([]);
  const [loading, setLoading] = useState(true);
  const { getWriterAllListingScripts } = useScriptsApi();

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        const res = await getWriterAllListingScripts();
        setScripts(res.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    openCreateScript,
    setOpenCreateScript,
    scripts,
    loading,
  };
};

export default useListings;
