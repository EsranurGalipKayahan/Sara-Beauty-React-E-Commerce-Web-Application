import React from "react";
import { Col, Image } from "react-bootstrap";

const BrandItem = ({ callout }) => {
  return (
    <Col xs={4} md={2}>
      <a href={callout.imageLink} target="_blank" rel="noreferrer">
        <Image src={callout.imageSrc} rounded />
      </a>
    </Col>
  );
};
export default BrandItem;
