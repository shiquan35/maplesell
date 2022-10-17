import React, { useContext } from "react";
import { ShopsContext } from "./homepage";
import { useNavigate } from "react-router-dom";

const AllShops = () => {
  const navigate = useNavigate();

  const {shops} = useContext(ShopsContext);
  const shopNames = [];

  for  (let i=0; i<shops.length; i++) {
    let name = String(shops[i].name);
    shopNames.push(name);
  }

  return (
    <>
      <div className="row1">
        <div className="shop"
        onClick={() => {
          navigate("/home/1");
        }}>
          <h3>{shopNames[0]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/2");
        }}>
          <h3>{shopNames[1]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/3");
        }}>
          <h3>{shopNames[2]}</h3>
        </div>
      </div>

      <div className="row2">
        <div className="shop"
        onClick={() => {
          navigate("/home/4");
        }}>
          <h3>{shopNames[3]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/5");
        }}>
          <h3>{shopNames[4]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/6");
        }}>
          <h3>{shopNames[5]}</h3>
        </div>
      </div>

      <div className="row3">
        <div className="shop"
        onClick={() => {
          navigate("/home/7");
        }}>
          <h3>{shopNames[6]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/8");
        }}>
          <h3>{shopNames[7]}</h3>
        </div>
        <div className="shop"
        onClick={() => {
          navigate("/home/9");
        }}>
          <h3>{shopNames[8]}</h3>
        </div>
      </div>
    </>
  );
};

export default AllShops;

// step 1
// const {users} = auth0();

// verify if logged in user (currUser) exists in our USERS table --> first GET request to obtain list of users

// step 2: GET request to USERS table --> store in "users"


// step 3
// 3a. store names of users in an array called "arrUsers"
// 3b. console.log(arrUsers.includes(currUser))
