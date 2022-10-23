import useMarketplaceApi from "apis/Marketplace.api";
import type { IProduct } from "interfaces/product";
import { useState, useEffect } from "react";

const useMarketplaceProducts = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState(true);
  const { getScripts } = useMarketplaceApi();

  useEffect(() => {
    async function getScriptsFunc() {
      const res = await getScripts();
      await setProducts(res.data);
      await console.log(res.data);

      await setLoading(false);
    }
    getScriptsFunc();
  }, []);

  return { products, loading };
};

export default useMarketplaceProducts;
