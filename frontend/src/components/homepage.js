import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import AllShops from "./AllShops";
// import map from "./fm1.png";
import storeImg from "./store2.png";
import storeMusic from "./floralLife.mp3";
import "./pages.css";
import { Link } from "react-router-dom";

export const ShopsContext = createContext();

const Homepage = () => {
  const [shops, setShops] = useState([]);
  // const [shopList, setShopList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((res) => {
        setShops(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const shopsList = shops.map((shopName, i) => {
  //   return <AllShops shopName={shopName} key={i + 1} />;
  // });

  // replaced props with context 
  // 1. ran into same type error like for SQL bigfoot exercise
  // 2. context allows me to have control over which shop to render; (all at once) by map VS (manually --> shopNames[0]) then organise by rows

  return (
    <>
    <ShopsContext.Provider
    value={{
        shops
      }}
      >
    <div className="homeContainer">
      {<AllShops />}
      {/* <img src={storeImg} className="storeImg" alt="loading..." /> */}
    </div> {/* end of homeContainer */}
    </ShopsContext.Provider>
    </>
  )
};

export default Homepage;
