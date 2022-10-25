import { currentUserId, indexId, currentUserName } from "./auth";
// import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  // const { isAuthenticated } = useAuth0();
  const [userInventory, setUserInventory] = useState([]);
  const navigate = useNavigate();
  // let { userId } = useParams();
  // let currentUserId2 = currentUserId;
  // console.log(currentUserId);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${indexId + 1}`)
      .then((res) => {
        setUserInventory(res.data);
        // userInventory = res.data;
        console.log(res.data);
        //create userdata = res.data, pass this as props to router
        console.log("user's inventory");
      })
      .catch((err) => console.log(err));
  }, []);
  const userInventoryFunction = userInventory.map((inventory) => {
    return (
      <>
        <div>{inventory.name}</div>
        <div>{inventory.price}</div>
        <div>{inventory.description}</div>
      </>
    );
  });
  // return <> test </>;
  return (
    <>
      <h2>{currentUserName}'s inventory</h2>
      {userInventoryFunction}
      <button
        onClick={() => {
          navigate(`/home`);
        }}
      >
        Back
      </button>
    </>
  );
};
export default ProfilePage;
