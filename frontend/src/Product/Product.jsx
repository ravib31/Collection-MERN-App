import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";
import { Link } from "react-router-dom";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.pixabay.com/photo/2022/06/21/23/11/asian-7276658_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/02/18/03/girl-5539094_1280.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span className="price">$19.99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quos?
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (1 ? 1 : prev - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            Add To Wishlist
          </div>
          <div className="item">
            <CompareIcon />
            Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          {/* <hr /> */}
          <span>ADDITIONAL INFORMATION</span>
          {/* <hr /> */}
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
