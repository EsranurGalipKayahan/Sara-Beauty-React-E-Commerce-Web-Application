import React, { useState, useContext } from "react";
import SearchBox from "../SearchBox";
import { ProductContext } from "../../contexts/ProductContext";
import { Container, Alert } from "react-bootstrap";
import SearchList from "../SearchList";

export const SearchController = () => {
  const { searchItem, isDataReady } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [show, setShow] = useState(false);

  const searchHandler = () => {
    if (!isDataReady) {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
      return;
    }
    setIsSearching(true);
    setResults(searchItem(searchTerm));
    setIsSearching(false);
  };
  return (
    <Container>
      {show && <Alert variant={"warning"}>Please wait and try later... </Alert>}
      <div className=" flex mt-24 mb-4 justify-center align-center">
        <p className="text-2xl font-bold font-sans">Search</p>
      </div>
      <SearchBox
        termHandler={(e) => setSearchTerm(e.target.value)}
        searchHandler={searchHandler}
      />
      {!isSearching && <SearchList results={results} />}
    </Container>
  );
};
export default SearchController;
