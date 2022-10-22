import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
let currentUserId;
let userInventory;

const Auth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  const allUserIds = [];
  for (let i = 0; i < allUsers.length; i++) {
    let userId = String(allUsers[i].id);
    allUserIds.push(userId);
  }

  if (isAuthenticated) {
    // for (let i = 0; i < allUsers.length; i++) {
    if (allUserIds.includes(user.id)) {
      console.log("user exists");
      console.log(user.id);
      currentUserId = user.id;
      console.log(currentUserId);
      axios
        .get(`http://localhost:3000/user/${user.id}`)
        .then((res) => {
          // setUserInventory(res.data);
          userInventory = res.data;
          console.log(res.data);
          //create userdata = res.data, pass this as props to router
          console.log("user's inventory");
        })
        .catch((err) => console.log(err));
    } else if (!allUserIds.includes(user.id)) {
      console.log("user does not exists");
      console.log(user.id);
      axios
        .post("http://localhost:3000/user", {
          email: user.email,
          password: user.password,
          username: user.username,
        })
        .then((res) => {
          console.log(res.data);
          console.log("user has been added");
        })
        .catch((err) => console.log(err));
      // }
    }

    return (
      // isAuthenticated && (
      <div>
        <span>Welcome {user.nickname}</span>
      </div>
      // )
    );
  }
};

export default Auth;
export { userInventory, currentUserId };
