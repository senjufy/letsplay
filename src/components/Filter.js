import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/albums.json";
import Card from "./Card";

function Filter({ match }) {
  let param = match.params.param;
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    data
      .filter((d) => d.source === param)
      .map((filteredSection) => {
        setFilteredData((prevState) => [...prevState, { filteredSection }]);
        console.log(filteredData);
      });
    if (param === "ALL") {
      data.map((allData) => {
        // setFilteredData((prevState) => [...prevState, { allData }]);
        console.log(allData);
      });
    }
  }, []);

  return (
    <div
      className={`bg-gradient-to-t from-gray-900 to-gray-800 pb-28 w-auto ${
        param === "LOCAL" ? "h-screen" : "h-full"
      }`}
    >
      <div className="flex justify-center ">
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 mt-5 rounded">
            Home
          </button>
        </Link>
      </div>
      <div
        className=" 
                mt-10 
                grid 
                grid-cols-2
                max-w-sm
                gap-10
                sm:grid-cols-2 
                sm:gap-5 
                md:grid-cols-3 
                md:max-w-2xl 
                lg:grid-cols-4 
                lg:max-w-4xl 
                mx-auto 
                sm:max-w-md
                xl:grid-cols-6
                xl:max-w-7xl
                xl:gap-6 "
      >
        {param === "ALL"
          ? data.map((allData) => (
              <Card
                key={allData.id}
                artist={allData.artist}
                album={allData.album}
                cover={allData.cover}
              />
            ))
          : filteredData.map((value) => (
              <div>
                <Card
                  key={value.filteredSection.id}
                  artist={value.filteredSection.artist}
                  album={value.filteredSection.album}
                  cover={value.filteredSection.cover}
                />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Filter;
