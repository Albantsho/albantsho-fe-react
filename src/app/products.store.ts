import { IProduct } from "interfaces/product";
import create from "zustand";

import { devtools } from "zustand/middleware";

interface IProductsState {
  products: IProduct[];
  getProducts: (product: IProductsState) => void;
}

const useProductsStore = create(
  devtools<IProductsState>((set) => ({
    products: [],

    getProducts: (products) => {
      set(products);
    },
  }))
);

export default useProductsStore;
