
import React, { useState } from "react";

function Search({ searchItems }) {
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();
    searchItems(searchQuery); 
  };

  return (
    <form className="py-3 w-full flex flex-row gap-6 justify-center items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-6/12 px-2 h-11 bg-transparent text-white outline-none rounded-md text-xl border-2 border-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Search query ko update kiya gaya hai
      />
      <input className="w-36 h-11 rounded-md text-white bg-blue-700" type="submit" value="Search" />
    </form>
  );
}

export default Search;
