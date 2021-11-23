import React, { createContext, useState, useEffect } from "react";
import { COLLECTION_URL } from "../data/constants";
import { useFetch } from "../components/hooks/useFetch";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [isDataReady, setIsDataReady] = useState(false);

  const bronzer = useFetch(COLLECTION_URL + "bronzer");
  const eyeliner = useFetch(COLLECTION_URL + "eyeliner");
  const nail_polish = useFetch(COLLECTION_URL + "nail_polish");
  const lipstick = useFetch(COLLECTION_URL + "lipstick");
  const foundation = useFetch(COLLECTION_URL + "foundation");
  const lip_liner = useFetch(COLLECTION_URL + "lip_liner");

  const collections = [
    bronzer,
    eyeliner,
    nail_polish,
    lipstick,
    foundation,
    lip_liner,
  ];
  useEffect(() => {
    if (
      !bronzer.isLoading &&
      !eyeliner.isLoading &&
      !nail_polish.isLoading &&
      !lipstick.isLoading &&
      !foundation.isLoading &&
      !lip_liner.isLoading
    ) {
      setIsDataReady(true);
    }
  }, [
    bronzer.isLoading,
    eyeliner.isLoading,
    nail_polish.isLoading,
    lipstick.isLoading,
    foundation.isLoading,
    lip_liner.isLoading,
  ]);
  const searchItem = (item) => {
    const searchTerm = new RegExp(item, "i");

    const result = collections.map((collection) => {
      const { data } = collection;
      return data.filter(
        (product) =>
          product.name.match(searchTerm) !== null ||
          (product.brand !== null &&
            product.brand.match(searchTerm) !== null) ||
          (product.category !== null &&
            product.category.match(searchTerm) !== null) ||
          (product.product_type !== null &&
            product.product_type.match(searchTerm) !== null)
      );
    });

    return result;
  };
  return (
    <ProductContext.Provider
      value={{
        bronzer,
        eyeliner,
        nail_polish,
        lipstick,
        foundation,
        lip_liner,
        searchItem,
        isDataReady,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
