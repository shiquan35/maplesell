import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ShopItems from "./ShopItems";
import { clickToNull, clickedDiv } from "./ShopItems";
import mesos from "../img/mesos.png";
import employee from "../img/employee.png";
import BuyDialog from "./buyDialog";
import { indexId } from "../auth";

const IndivShops = () => {
  const [buyingPopup, setBuyingPopup] = useState(false);
  const [indivShops, setIndivShops] = useState([]);
  let { shopId } = useParams();
  const navigate = useNavigate();

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

  const handleBuyingConfirmation = () => {
    console.log({ clickedDiv });
    setBuyingPopup(true);
  };

  const handleClose = () => {
    setBuyingPopup(false);
    // apparently window reload didnt do anything?
    window.reload();
  };

  //want to do a check to see if user has enough money?
  //how to put the id here?
  const handleBuy = async () => {
    let itemStatus = {
      id: clickedDiv,
      bought: true,
      buyer_id: indexId + 1,
      //use auth0 hook to get userId? or possible to pass the id here?
      //buyer_id:
    };

    await axios
      .put(`http://localhost:3000/home/${shopId}`, itemStatus)
      .then((res) => console.log("Posted", res, itemStatus))
      .catch((err) => console.log(err));
    navigate(`/home`);
    alert("Item bought! congrats!");
    clickToNull();
  };

  return (
    <>
      <div className="shopBackground">
        <div className="pageContainer">
          <div className="shopDiv">
            <div className="topContainer">
              <div className="employeeContainer">
                <img src={employee} className="employee" alt="employee" />
              </div>
              <div className="buttonContainer">
                <div className="divButtons">
                  <button
                    onClick={handleBuyingConfirmation}
                    className="shopButton"
                  >
                    BUY ITEM
                  </button>
                </div>

                <div className="divButtons">
                  <button
                    onClick={() => {
                      clickToNull();
                      navigate("/new");
                    }}
                    className="shopButton"
                  >
                    SELL ITEM
                  </button>
                </div>

                <div className="divButtons">
                  <button
                    className="shopButton"
                    onClick={() => {
                      clickToNull();
                      navigate("/home");
                    }}
                  >
                    LEAVE STORE
                  </button>
                </div>
              </div>
            </div>

            <BuyDialog
              buyingPopup={buyingPopup}
              handleBuy={handleBuy}
              handleClose={handleClose}
            />

            <div className="shopItems">{shopItems}</div>
          </div>
          <div className="userDiv">
            {/* items below are hard coded just to test design and scrollbar function */}
            <div>
              <div className="topContainer">
                <img src={mesos} className="mesos" alt="mesos: " />
                1,000,000,000
              </div>
              <div className="userItems">
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 78</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 89</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default IndivShops;
