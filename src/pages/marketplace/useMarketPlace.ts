import useMarketplaceApi from "apis/Marketplace.api";
import { IProduct } from "interfaces/product";
import React, { useEffect, useState } from "react";

const useMarketPlace = () => {
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

  return { scripts, loading };
};

export default useMarketPlace;
