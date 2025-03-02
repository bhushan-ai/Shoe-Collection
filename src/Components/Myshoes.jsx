import React from "react";

function Myshoes({ img, name, price, actual_price, rating }) {
  return (
    <>
     
      <div className="flex flex-wrap gap-6 justify-around">
        <div className="w-[239px] bg-white p-2.5 aspect-square hover:shadow-lg">
          <div className="relative flex justify-center items-center">
            <img
              src={img}
              alt={name}
              className="mt-2 w-[220px] h-[220px] transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute left-1/2 -translate-x-1/2 text-black w-full text-left text-md bottom-px flex items-center ">
              {rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgb(215, 111, 0)"
                className="ml-1"
              >
                <path d="M12 2L14.09 8.26L20.9 9.27L15.64 13.97L17.27 20.66L12 17.27L6.73 20.66L8.36 13.97L3.1 9.27L9.91 8.26L12 2Z" />
              </svg>
            </span>
          </div>
          <h2 className="font-bold text-left mt-2">{name}</h2>
          <h3 className="text-left">
            {price}
            <span className="ml-2 line-through text-gray-400">
              {actual_price}
            </span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Myshoes;
