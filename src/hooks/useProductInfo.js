import { useEffect, useState } from "react";


function useProductInfo(product) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${product}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [product]);
  return data;
}

export default useProductInfo;
