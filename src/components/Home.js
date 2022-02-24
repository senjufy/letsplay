import Card from "./Card";
import { useState } from "react";
import data from "../data/albums.json";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItem } from "../redux/action";
import DropDown from "./DropDown";

function Home() {
  const [fetch, setFetch] = useState(false);
  let items = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(items);

  function add() {
    data.map((item) => {
      dispatch(
        addItem({
          id: item.id,
          source: item.source,
          artist: item.artist,
          album: item.album,
          cover: item.cover,
        })
      );
    });
    setFetch(true);
  }

  return (
    <div className="bg-gradient-to-t from-gray-900 to-gray-800 h-auto pb-10 xl:h-screen w-auto">
      {fetch ? (
        <div>
          <div className="flex justify-center">
            <DropDown />
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
            {data.map((allData) => (
              <Card
                key={allData.id}
                artist={allData.artist}
                album={allData.album}
                cover={allData.cover}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <button
            onClick={add}
            className="bg-gray-900 border-gray-400 border-2 rounded-lg h-10 w-40 text-white hover:bg-blue-900 hover:text-black outline-none focus:outline-none ease-linear transition-all duration-150 hover:border-transparent"
          >
            Get Albums
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
