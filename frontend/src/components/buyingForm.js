import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BuyingForm = async () => {
  const shopId = useParams();
  const navigate = useNavigate();

  let itemStatus = {
    bought: true,
  };

  await axios
    .put(`http://localhost:3000/home/${shopId}`, itemStatus)
    .then((res) => console.log("Posted", res))
    .catch((err) => console.log(err));

  navigate(`/home/${shopId}`);

  return <div>buyingForm</div>;
};

export default BuyingForm;
