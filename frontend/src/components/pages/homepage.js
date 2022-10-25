import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import AllShops from "./AllShops";
import { useNavigate } from "react-router-dom";
import storeMusic from "../audio/floralLife.mp3";
import "./pages.css";

export const ShopsContext = createContext();

const Homepage = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((res) => {
        setShops(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ShopsContext.Provider
        value={{
          shops,
        }}
      >
        <div className="homeContainer">{<AllShops />}</div>
      </ShopsContext.Provider>
    </>
  );
};

export default Homepage;
