import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mesos from "./mesos.png"
import Item from "./Item";

let currSelectedDiv = null; // use this variable to buy item later
let clickedDiv = null;

const ShopItems = ({ shopItem }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverDiv, setHoverDiv] = useState(null);

  // const [clickedDiv, setClickedDiv] = useState(null);
  const [clicked, setClicked] = useState(false); //if true, change colour
  // const [currSelectedDiv, setCurrSelectedDiv] = useState(null);


  const handleMouseOver = () => {
    setIsHovering(true);
    setHoverDiv(shopItem.id);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverDiv(null);
  };

  const handleClick = () => {
    clickedDiv = shopItem.id;
    if (currSelectedDiv === null) {
      currSelectedDiv = clickedDiv;
    }
    else if (currSelectedDiv === clickedDiv) {
      currSelectedDiv = null;
    }
    else if (currSelectedDiv !== clickedDiv) {
      console.log(`currSelected is ${currSelectedDiv} but clicked on ${clickedDiv}`);
      return;
    }
    setClicked(!clicked);
  }

  return (
    <>
    {console.log("currSelectedDiv:",currSelectedDiv)}
    {console.log("clickedDiv:",clickedDiv)}
      <div className="items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
        <div className={`itemName ${clicked ? "clickedColour" : "" }`}>
          {/* <Link to={`${shopItem.id}`}> */}
            <p>{shopItem.name}</p>
          {/* </Link> */}
        </div>
        
        <div className={`price ${clicked ? "clickedColour" : "" }`}>
          <img src={mesos} className="mesos" alt="mesos: " /><p className="priceText">{shopItem.price} mesos</p>
          <br />
        </div>
      </div>

      {isHovering && (
          <div className="itemDisplay">
            <Item listingID={hoverDiv}/>
          </div>
        )}
    </>
  );
};

export default ShopItems;
