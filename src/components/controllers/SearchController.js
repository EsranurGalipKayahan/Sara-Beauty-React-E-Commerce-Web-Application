import React, { useState, useContext } from "react";
import SearchBox from "../SearchBox";
import { ProductContext } from "../../contexts/ProductContext";
import { Container, Alert } from "react-bootstrap";
import SearchList from "../SearchList";
import { isEmptyMultiDimensionalArr } from "../../helpers/utilityfuncs";

export const SearchController = () => {
  const { searchItem, isDataReady } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [show, setShow] = useState(false);
  const [firstRound, setFirstRound] = useState(true);

  const searchHandler = (e) => {
    e.preventDefault();
    setFirstRound(false);
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
      {show && <Alert variant={"warning"}>Please try again later!</Alert>}
      <div className=" flex mt-24 mb-4 justify-center align-center">
        <p className="text-2xl font-bold font-sans">Search</p>
      </div>
      <SearchBox
        termHandler={(e) => {
          setIsSearching(true);
          setSearchTerm(e.target.value);
        }}
        searchHandler={searchHandler}
      />
      {!isSearching && <SearchList results={results} />}
      {!firstRound && isEmptyMultiDimensionalArr(results) && !isSearching && (
        <div className=" flex mt-24 mb-4 justify-center align-center">
          <p className="text-2xl font-bold font-sans">No matching results!</p>
        </div>
      )}
    </Container>
  );
};
export default SearchController;
