import React from "react";
import CollectionList from "../CollectionList";
import callouts from "../../data/collections.json";

const CollectionController = () => {
  return <CollectionList callouts={callouts} />;
};
export default CollectionController;
