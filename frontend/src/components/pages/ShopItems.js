import React, { useState } from "react";
import mesos from "../img/mesos.png";

var currSelectedDiv = null; // use this variable to buy item later
var clickedDiv = null;

const clickToNull = () => {
  currSelectedDiv = null;
  clickedDiv = null;
};

const ShopItems = ({ shopItem }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false); //if true, change colour

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
      {/* {console.log(clicked)}
      {console.log("currSelectedDiv:", currSelectedDiv)}
      {console.log("clickedDiv:", clickedDiv)} */}
      <div
        className="items"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={handleClick}
      >
        <div className="itemLeft">
          <img src={shopItem.photo} alt={shopItem.name} className="itemPhoto" />
        </div>
        <div className="itemRight">
          <div className={`itemName ${clicked ? "clickedColour" : ""}`}>
            {/* but doesnt seem to work if you re-click */}
            {/* have to change it to span for the reds to disappear */}
            <p className="itemText">{shopItem.name}</p>
          </div>

          <div className={`price ${clicked ? "clickedColour" : ""}`}>
            <img src={mesos} className="mesos" alt="mesos: " />
            {/* have to change it to span for the reds to disappear */}
            <p className="priceText">{shopItem.price} mesos</p>
            <br />
          </div>
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

export { clickToNull, clickedDiv };
export default ShopItems;
