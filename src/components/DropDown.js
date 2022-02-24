import React, { useState } from "react";
import { useSelector } from "react-redux";
function DropDown() {
  const [show, setShow] = useState(false);
  let items = useSelector((state) => state[1].filter);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="bg-gray-500 text-white px-4 py-2 rounded mt-5"
      >
        Filter
      </button>
      <div
        className={`bg-gray-200 flex-col rounded mt-1 p-2 text-sm w-32  ${
          show ? "flex absolute z-10" : "hidden"
        }`}
        id="dropdown"
      >
        {items.map((data) => (
          <a
            key={data}
            href={`filter/${data}`}
            className="px-2 py-1 hover:bg-gray-300 rounded"
          >
            {data}
          </a>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
