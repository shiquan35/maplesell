import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShopItems from "./ShopItems";

const IndivShops = () => {
  const [indivShops, setIndivShops] = useState([]);

  let { shopId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/${shopId}`)
      .then((res) => {
        setIndivShops(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const shopItems = indivShops.map((shopItem, i) => {
    return <ShopItems shopItem={shopItem} key={i + 1} />;
  });

  return <div>{shopItems}</div>;
};

export default IndivShops;
