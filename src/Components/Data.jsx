import React from "react";
import Myshoes from "./Myshoes";
import MostFav from "./MostFav";
function Data() {
  const shoes = [
    {
      name: "Low Dunk Retro",
      price: "$91",
      actual_price: "$120",
      rating: "4.4",
      img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/031047ea-72b0-4473-8f70-130ceea7f073/dunk-low-retro-gym-red-dd1391-602-release-date.jpg",
    },

    {
      name: "AF1 HAMAVA",
      price: "$150",
      actual_price: "$200",
      rating: "4.4",
      img: "https://img.cdnx.in/210522/hamawabanner-1734001933133.jpeg?width=600&format=webp",
    },
    {
      name: "Abros DASHON Running Shoe",
      price: "$11",
      actual_price: "$21",
      rating: "4.1",
      img: "https://rukminim1.flixcart.com/image/2416/2416/xif0q/shoe/z/k/c/6-assg1453-black-sea-green-abros-black-sea-green-original-imah2ghvpz6hu3a5.jpeg?q=90&crop=false",
    },
    {
      name: "Air Force 1",
      price: "$130",
      actual_price: "$170",
      rating: "4.5",
      img: "https://img.cdnx.in/210522/1705306958050_SKU-1803_0.png?width=600&format=webp",
    },
    {
      name: "Dunk Low University Blue",
      price: "$159",
      actual_price: "$170",
      rating: "4.5",
      img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/d5b698f4-3351-4d97-a054-f88c1eeb7379/dunk-low-university-blue-release-date.jpg",
    },
    {
      name: "Nike SB Air Jordan 4 Green",
      price: "$300",
      actual_price: "$350",
      rating: "4.5",
      img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/f40855c9-b765-4feb-93fe-192b10906932/nike-sb-x-air-jordan-4-pine-green-dr5415-103-release-date.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl mt-10 font-bold">
        Actually I have only two of them !!
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 mt-10  md:m-20 m-0 justify-evenly ">
        {shoes.map((shoe, index) => (
          <Myshoes
            key={index}
            name={shoe.name}
            price={shoe.price}
            actual_price={shoe.actual_price}
            img={shoe.img}
            rating={shoe.rating}
          />
        ))}
      </div>
    </>
  );
}

export default Data;
