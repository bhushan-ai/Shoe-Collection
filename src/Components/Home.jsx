import React from "react";
import AllShoes from "./AllShoes";

function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl mt-10 font-bold">
        Welcome to my Shoe Collection !!
      </h1>
      <p className="text-center md:text-2xl font-semibold text-gray-600 mt-10 text-xl">
        This is my Shoe Collection , Actually I'm sneakerhead I like to collect
        shoes
      </p>
      <AllShoes />
    </div>
  );
}

export default Home;
