import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ShopItems from "./ShopItems";
import mesos from "./mesos.png"
import employee from "./employee.png";

const IndivShops = () => {
  const navigate = useNavigate();

  const [indivShops, setIndivShops] = useState([]);
  const [photos, setPhotos] = useState([]);

  let { shopId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/${shopId}`)
      .then((res) => {
        setIndivShops(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    // axios
    //   .get(`http://localhost:3000/home/${shopId}`)
    //   .then((res) => {
    //     setIndivShops(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const shopItems = indivShops.map((shopItem, i) => {
    return <ShopItems shopItem={shopItem} key={i + 1} />;
  });

  return (
    <>
      <div className="shopBackground">
        <div className="pageContainer">
          <div className="shopDiv">
            <div className="topContainer">
              <div>
                <img src={employee} className="employee" alt="employee"/>
              </div>
              <div className="buttonContainer">
                <div className="divButtons">
                  <button className="shopButton">BUY ITEM</button>
                </div>
                <br/>
                <br/>

                <div className="divButtons">
                  <button className="shopButton"
                  onClick={() => {
                    navigate("/home");
                  }}>
                    LEAVE STORE</button>
                </div>
              </div>
            </div>

            <div className="shopItems">
              {shopItems}
            </div>

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
      </div>;
    </>
  )
};

export default IndivShops;
