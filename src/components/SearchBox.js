import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ termHandler, searchHandler }) => {
  return (
    <div className="flex min-w-full md:min-w-0 justify-center my-23">
      <form onSubmit={searchHandler} className="w-1/2 text-center">
        <input
          type="text"
          name="name"
          onChange={termHandler}
          placeholder="Search brand or product name..."
          className="w-2/3 py-2 border-b-2 styled-border outline-none focus:border-indigo-400"
          required
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
