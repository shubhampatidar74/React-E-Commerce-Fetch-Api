import React, { useState } from "react";
import Card from "./components/Card";
import useProductInfo from "./hooks/useProductInfo";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const data = useProductInfo(searchQuery);

  function searchItemsData(data) { 
    setSearchQuery(data); 
  }

  return (
    <>
      <Search searchItems={searchItemsData} /> {/* Prop ka naam sahi kiya gaya hai */}
      <div className="px-20 py-6 w-full flex gap-4 flex-wrap justify-start h-screen">
        {data?.products.map((item, index) => (
          <Card key={index} title={item.title} data={item} />
        ))}
      </div>
    </>
  );
}

export default App;
