import useScriptsApi from "apis/Scripts.api";
import { IBidScript } from "interfaces/script";
import { useEffect, useState } from "react";

const useListings = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);
  const [openAddToScript, setOpenAddToScript] = useState<boolean>(false);

  const [scripts, setScripts] = useState<Array<IBidScript>>([]);
  const [loading, setLoading] = useState(true);
  const { getWriterAllListingScripts } = useScriptsApi();

  useEffect(() => {
    async function getScriptsFunc() {
      const res = await getWriterAllListingScripts();

      setScripts(res.data.scripts);
      setLoading(false);
    }
    getScriptsFunc();
  }, []);

  return {
    openCreateScript,
    setOpenCreateScript,
    openRelistScript,
    setOpenRelistScript,
    openAddToScript,
    setOpenAddToScript,
    scripts,
    loading,
  };
};

export default useListings;
