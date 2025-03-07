import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="m-3 mt-0 shadow-md">
      <nav className="bg-white pt-[10px] pr-0 flex justify-between items-center flex-wrap ">
        <NavLink to="/">
          <h2 className="p-2.5 cursor-pointer font-semibold text-black text-md md:text-2xl transition duration-500 ease-in-out hover:scale-105 hover:text-sky-700 ">
            Bhushan's Shoe Collection
          </h2>
        </NavLink>
        <ul className="flex flex-wrap list-none items-center gap-5 mr-3 ">
          {/* <li className="p-2.5 cursor-pointer font-semibold text-gray-600 text-md transition duration-500 ease-in-out md:text-lg hover:text-black hover:scale-105"> */}
          <li>
            <NavLink
              to="/Myshoes"
              className={({ isActive }) =>
                ` p-2.5 cursor-pointer font-semibold text-lg dark:hover:text-blue-400 transition duration-300 ${
                  isActive ? "text-blue-400 font-bold " : "  text-gray-600"
                } `
              }
            >
              My Shoes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/MostFav"
              className={({ isActive }) =>
                ` p-2.5 cursor-pointer font-semibold text-lg dark:hover:text-blue-400 transition duration-300 ${
                  isActive ? "text-blue-400 font-bold " : "  text-gray-600"
                } `
              }
            >
              Most Fav
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Upcomming"
              className={({ isActive }) =>
                `p-2.5 cursor-pointer font-semibold text-lg dark:hover:text-blue-400 transition duration-300  ${
                  isActive ? "text-blue-400 font-bold " : "  text-gray-600"
                } `
              }
            >
              Up Comming
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
