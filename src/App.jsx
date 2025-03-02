import "./App.css";
import Myshoes from "./Components/Myshoes";
import Header from "./Components/Header";
import MostFav from "./Components/MostFav";
import Upcomming from "./Components/Upcomming";
import Data from "./Components/Data";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/MyShoes" element={<Data />} />

        <Route path="/MostFav" element={<MostFav />} />
        <Route path="/Upcomming" element={<Upcomming />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
