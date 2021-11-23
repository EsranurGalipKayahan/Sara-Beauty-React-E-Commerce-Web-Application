import React from "react";
import brands from "../data/brands.json";
import BrandItem from "../components/BrandItem";
import { Container, Row } from "react-bootstrap";

const Brands = () => {
  return (
    <Container>
      <div className="grid ">
        <h2 className="text-2xl py-5 font-bold font-sans text-gray-900">
          Our Partners
        </h2>
        <Row>
          {brands.map((callout) => (
            <BrandItem key={callout.imageSrc} callout={callout} />
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default Brands;
