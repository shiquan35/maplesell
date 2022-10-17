import React from "react";

const ItemDescription = ({ item }) => {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </>
  );
};

export default ItemDescription;