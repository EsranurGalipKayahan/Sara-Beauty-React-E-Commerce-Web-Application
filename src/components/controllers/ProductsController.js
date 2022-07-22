import { Container, Spinner } from "react-bootstrap";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import ProductList from "../ProductList";

const ProductsController = () => {
  const { collection } = useParams();
  const context = useContext(ProductContext);
  const { data } = context[collection];

  return (
    <Container>
      {!data ? (
        <Spinner animaton="grow" />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ProductList data={data} collection={collection} />
        </div>
      )}
    </Container>
  );
};
export default ProductsController;
