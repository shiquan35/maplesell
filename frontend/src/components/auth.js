import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let currentUserId;
let userInventory;
let indexId;
let currentUserName;

const Auth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  // const [userInventory, setUserInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        setAllUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);
  console.log(isAuthenticated);
  console.log(allUsers);

  const allUserEmails = [];
  for (let i = 0; i < allUsers.length; i++) {
    let userEmail = String(allUsers[i].email);
    allUserEmails.push(userEmail);
  }

  if (isAuthenticated) {
    // for (let i = 0; i < allUsers.length; i++) {
    if (allUserEmails.includes(user.email)) {
      indexId = Number(allUserEmails.indexOf(user.email));
      console.log("user exists");
      navigate(`/home`);

      console.log(allUsers);
      console.log(allUsers[1].id);
      console.log(indexId);
      // console.log(allUsers[indexId].username);
      console.log(allUsers[indexId].username);
      currentUserName = allUsers[indexId].username;
      // currentUserId = user.id;
      // console.log(currentUserId);
      axios
        .get(`http://localhost:3000/user/${indexId - 1}`)
        .then((res) => {
          // setUserInventory(res.data);
          userInventory = res.data;
          console.log(res.data);
          //create userdata = res.data, pass this as props to router
          console.log("user's inventory");
        })
        .catch((err) => console.log(err));
    } else if (!allUserEmails.includes(user.id)) {
      console.log("user does not exists");
      console.log(user.id);
      console.log(user);
      console.log(user.username);
      axios
        .post("http://localhost:3000/user", {
          email: user.email,
          password: user.password,
          username: user.nickname,
        })
        .then((res) => {
          console.log(res.data);
          console.log("user has been added");
        })
        .catch((err) => console.log(err));
      // }
    }

    return (
      isAuthenticated && (
        <div>
          <span>Welcome {user.nickname}</span>
        </div>
      )
    );
  }
};

export default Auth;
export { userInventory, currentUserId, indexId, currentUserName };
