import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import SellForm from "./sellForm";

const SellingForm = () => {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [shop, setShop] = useState([{}]);
  const [category, setCategory] = useState([]);

  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  //creating the select options for both shops and category
  let apiCalls = [
    "http://localhost:3000/home",
    "http://localhost:3000/category",
  ];

  useEffect(() => {
    axios
      .all(apiCalls.map((call) => axios.get(call)))
      .then(
        axios.spread((shop, category) => {
          setShopName(shop.data);
          setCategoryName(category.data);
          console.log({ shop, category });
        })
      )
      .catch((err) => console.log(err));
  }, []);

  // map them into the select options
  const shopNameOptions = shopName.map((names) => ({
    value: names.id,
    label: names.name,
  }));

  const categoryNameOptions = categoryName.map((names) => ({
    value: names.id,
    label: names.name,
  }));

  // set the selected option from shopNameOptions / categoryNameOptions
  // need to coerce it into a [{}] so that .map recognizes it as a function??
  // because mapping you need an array!!!
  const handleCategorySelect = (e) => {
    setCategory([e]);
  };

  const handleShopSelect = (e) => {
    setShop([e]);
  };

  //post request
  //how to post photos?
  //how to add id of user here?
  const handleSubmit = async (e) => {
    console.log("submit running");
    e.preventDefault();

    // extracting the id from selected shop/category
    const selectedCategoryId = category.map(({ value }) => value);
    const selectedShopId = shop.map(({ value }) => value);

    let userInput = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      category_id: selectedCategoryId,
      shop_id: selectedShopId,
    };

    console.log(userInput);

    await axios
      .post("http://localhost:3000/home", userInput)
      .then((res) => console.log("Posted", res))
      .catch((err) => console.log(err));
    e.target.reset();
    navigate("/home");
    alert("Item listed! congrats!");
    console.log("submit ran");
  };

  return (
    <>
      <div className="shopBackground">
        <div className="pageContainer">
          <div className="sellingFormDiv">
            <button className="shopButton" onClick={() => navigate("/home")}>
              Back to All Shops
            </button>
            <button className="shopButton" onClick={() => navigate(-1)}>
              Back to Previous Shop
            </button>
            <form className="formFonts" onSubmit={handleSubmit}>
              <h2>Selling Form</h2>
              <SellForm
                nameRef={nameRef}
                priceRef={priceRef}
                descriptionRef={descriptionRef}
              />
              <br />
              <label>Class:</label>
              <Select
                options={shopNameOptions}
                onChange={handleShopSelect}
                value={shop}
              />
              <label>Category:</label>
              <Select
                options={categoryNameOptions}
                onChange={handleCategorySelect}
                value={category}
              />

              <br />
              <input className="shopButton" type="submit" value="SELL!" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingForm;
