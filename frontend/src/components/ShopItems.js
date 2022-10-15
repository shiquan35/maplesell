import React from "react";
import { Link } from "react-router-dom";

const ShopItems = ({ shopItem }) => {
  return (
    <>
      <h4>Name: </h4>
      <Link to={`${shopItem.id}`}>
        <p>{shopItem.name}</p>
      </Link>
      <h4>Price:</h4>
      <p>{shopItem.price}</p>
      <br />
    </>
  );
};

export default ShopItems;
