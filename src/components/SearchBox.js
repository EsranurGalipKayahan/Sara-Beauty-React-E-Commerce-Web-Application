import React from "react";
import { FiSearch } from "react-icons/fi";
export const SearchBox = ({ termHandler, searchHandler }) => {
  return (
    <div class="flex items-center min-w-full md:min-w-0 justify-center my-23">
      <input
        type="text"
        name="name"
        onChange={termHandler}
        placeholder="Search brand or product name..."
        class="w-1/2 py-2 border-b-2 styled-border outline-none focus:border-indigo-400"
      />
      <button onClick={searchHandler}>
        <FiSearch />
      </button>
    </div>
  );
};
export default SearchBox;
