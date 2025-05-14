import React from "react";

function AllShoes() {
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
      name: "Air Force 1",
      price: "$130",
      actual_price: "$170",
      rating: "4.5",
      img: "https://img.cdnx.in/210522/1705306958050_SKU-1803_0.png?width=600&format=webp",
    },
    {
      name: "Abros DASHON Running Shoe",
      price: "$11",
      actual_price: "$21",
      rating: "4.1",
      img: "https://rukminim1.flixcart.com/image/2416/2416/xif0q/shoe/z/k/c/6-assg1453-black-sea-green-abros-black-sea-green-original-imah2ghvpz6hu3a5.jpeg?q=90&crop=false",
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
      <div className="grid  grid-cols-2 md:grid-cols-4 mt-10  md:m-20 m-0 justify-evenly ">
        {shoes.map((item, index) => (
          <div
            key={index}
            className="w-[239px] bg-white p-2.5 aspect-square hover:shadow-lg"
          >
            <div className="relative flex justify-center items-center">
              <img
                src={item.img}
                alt={item.name}
                className="mt-2 w-[220px] h-[220px] transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute left-1/2 -translate-x-1/2 text-black w-full text-left text-md bottom-px flex items-center">
                {item.rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="rgb(215, 111, 0)"
                  className="ml-0"
                >
                  <path d="M12 2L14.09 8.26L20.9 9.27L15.64 13.97L17.27 20.66L12 17.27L6.73 20.66L8.36 13.97L3.1 9.27L9.91 8.26L12 2Z" />
                </svg>
              </span>
            </div>
            <h2 className="font-bold text-left mt-2">{item.name}</h2>
            <h3 className="text-left">
              {item.price}
              <span className="ml-2 line-through text-gray-400">
                {item.actual_price}
              </span>
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllShoes;
