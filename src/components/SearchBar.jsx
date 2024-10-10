import React from "react";

const SearchBar = ({ query, setQuery, stockChecked, setstockChecked }) => {
  return (
    <div>
      <input type="text" value={query} onChange={(emo) => setQuery(emo.target.value)} placeholder="Type Here"/>
      <div>
        <input type="checkbox" checked={stockChecked} onChange={(emo) => setstockChecked(emo.target.checked)} />
        Only show products in stock
      </div>
    </div>
  );
};

export default SearchBar;