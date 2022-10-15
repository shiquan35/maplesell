import React from "react";
import { Link } from "react-router-dom";

const AllShops = ({ shopName }) => {
  return (
    <>
      <Link to={`${shopName.id}`}>
        <p>{shopName.name}</p>
      </Link>
    </>
  );
};

export default AllShops;
