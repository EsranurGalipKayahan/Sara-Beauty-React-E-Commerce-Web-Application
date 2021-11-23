import React from "react";
import ProductList from "./ProductList";

const SearchList = ({ results }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {results.map((productArr, index) => {
        if (productArr.length > 0)
          return (
            <ProductList
              key={index}
              data={productArr}
              collection={productArr[0].product_type}
            />
          );
        return;
      })}
    </div>
  );
};
export default SearchList;
