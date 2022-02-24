import React from "react";

function Card({ artist, album, cover }) {
  return (
    <div className="flex flex-col transform transition duration-500 hover:scale-110">
      <img className="h-48 w-48" src={cover} />
      <h1 className="mt-2 text-lg text-gray-200">{artist}</h1>
      <h1 className="text-sm text-gray-200 truncate w-40">{album}</h1>
    </div>
  );
}

export default Card;
