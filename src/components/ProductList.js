import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ data, collection }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = "/images/nopreview.jpg";
  };
  return data
    .filter((product) => product.price > 0)
    .map((product) => (
      <div key={product.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <Link to={`/${collection}/${product.id}`} key={product.id}>
            <img
              onError={addDefaultSrc}
              src={product.image_link}
              alt={product.name}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </Link>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/${collection}/${product.id}`} key={product.id}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.brand}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">€{product.price}</p>
        </div>
      </div>
    ));
};
export default ProductList;
