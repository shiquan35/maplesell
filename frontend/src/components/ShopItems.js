import React, { useState } from "react";
import mesos from "./mesos.png";

let currSelectedDiv = null; // use this variable to buy item later
let clickedDiv = null;

const ShopItems = ({ shopItem }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false); //if true, change colour

  // this part keeps detecting even in hover
  const handleClick = () => {
    clickedDiv = shopItem.id;
    if (currSelectedDiv === null) {
      currSelectedDiv = clickedDiv;
    } else if (currSelectedDiv === clickedDiv) {
      currSelectedDiv = null;
    } else if (currSelectedDiv !== clickedDiv) {
      console.log(
        `currSelected is ${currSelectedDiv} but clicked on ${clickedDiv}`
      );
      return;
    }
    setClicked(!clicked);
  };

  return (
    <>
      <div
        className="items"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={handleClick}
      >
        {console.log("currSelectedDiv:", currSelectedDiv)}
        {console.log("clickedDiv:", clickedDiv)}
        <div className={`itemName ${clicked ? "clickedColour" : ""}`}>
          {/* <img src={shopItem.photo} alt={shopItem.name} /> */}
          <p className="itemText">{shopItem.name}</p>
        </div>

        <div className={`price ${clicked ? "clickedColour" : ""}`}>
          <img src={mesos} className="mesos" alt="mesos: " />
          <p className="priceText">{shopItem.price} mesos</p>
          <br />
        </div>
      </div>

      {isHovering && (
        <div className="itemDisplay">
          <>
            <img src={shopItem.photo} alt={shopItem.name} />
            <p>{shopItem.name}</p>
          </>
          <p>{shopItem.description}</p>
        </div>
      )}
    </>
  );
};

export default ShopItems;
