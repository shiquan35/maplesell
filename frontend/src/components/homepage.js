import React, { useState, useEffect } from "react";
import axios from "axios";
import AllShops from "./AllShops";

const Homepage = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((res) => {
        setShops(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const shopsList = shops.map((shopName, i) => {
    return <AllShops shopName={shopName} key={i + 1} />;
  });

  return <div>{shopsList}</div>;
};

export default Homepage;
