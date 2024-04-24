import React, { useState } from "react";

function Card({ data }) {
  const [showAll, setShowAll] = useState(false);

  let pera = data.description.split(" ");
  let elements = [];
  for (let index = 0; index <= 10; index++) {
    elements.push(pera[index]);
  }

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="cursor-pointer rounded-md px-2 py-2 w-80 h-96 bg-blue-950 border-2 border-zinc-500">
        <img
          className="rounded-md w-full h-40 border-2 border-zinc-500"
          src={data.thumbnail}
          alt=""
        />
        <h2 className="text-xl font-bold text-white">{data.title}</h2>
        <p className="text-zinc-400">
          {showAll ? pera.join(" ") : elements.join(" ")}
          {!showAll && (
            <span
              className="text-blue-500 ml-1 cursor-pointer"
              onClick={toggleShowAll}
            >
              Read More...
            </span>
          )}
          {showAll && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleShowAll}
            >
              {" Read Less"}
            </span>
          )}
        </p>
        <h2 className="text-2xl text-white font-bold">${data.price}</h2>
        <h2 className="text-lg text-red-500">
          <span className="text-zinc-100">Discount: </span>-
          {data.discountPercentage}%
        </h2>
        <p className="text-md text-zinc-100">
          <span>Rating: </span> {data.rating}
        </p>
      </div>
    </>
  );
}

export default Card;
