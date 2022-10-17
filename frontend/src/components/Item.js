import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDescription from "./ItemDescription";

const Item = ({listingID}) => {
  const [item, setItem] = useState([]);

  let { shopId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/${shopId}/${listingID}`)
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = item.map((item, i) => {
    return <ItemDescription item={item} key={i + 1} />;
  });

  return <div>{items}</div>;
};

export default Item;
