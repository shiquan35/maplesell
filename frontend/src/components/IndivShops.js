import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ShopItems from "./ShopItems";
import mesos from "./mesos.png";
import employee from "./employee.png";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContentText";

const IndivShops = () => {
  const [buyingPopup, setBuyingPopup] = useState(false);
  const [indivShops, setIndivShops] = useState([]);
  const [photos, setPhotos] = useState([]);
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
    setBuyingPopup(true);
  };

  const handleClose = () => {
    setBuyingPopup(false);
  };

  const handleBuy = async () => {
    let itemStatus = {
      bought: true,
    };

    await axios
      .put(`http://localhost:3000/home/${shopId}`, itemStatus)
      .then((res) => console.log("Posted", res))
      .catch((err) => console.log(err));

    navigate(`/home/${shopId}`);
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
                      navigate("/home");
                    }}
                  >
                    LEAVE STORE
                  </button>
                </div>
              </div>
            </div>

            <Dialog
              open={buyingPopup}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className="formFonts"
            >
              <DialogTitle id="alert-dialog-title">{"Buying?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Do you really wish to buy this item?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button className="shopButton" onClick={handleBuy}>
                  BUY
                </button>
                <button className="shopButton" onClick={handleClose}>
                  CANCEL
                </button>
              </DialogActions>
            </Dialog>

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
