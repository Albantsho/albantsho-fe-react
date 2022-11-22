import useMarketplaceApi from "apis/Marketplace.api";
import { IProduct } from "interfaces/product";
import { useEffect, useState } from "react";

const useListings = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);
  const [openAddToScript, setOpenAddToScript] = useState<boolean>(false);
  const [openUnListingItem, setOpenUnListingItem] = useState<boolean>(false);
  const [scripts, setScripts] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState(true);
  const { getScripts } = useMarketplaceApi();

  useEffect(() => {
    async function getScriptsFunc() {
      const res = await getScripts();

      setScripts(res.data);
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
    openUnListingItem,
    setOpenUnListingItem,
    scripts,
    loading,
  };
};

export default useListings;
