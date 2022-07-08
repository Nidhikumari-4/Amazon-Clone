import React from "react";
import { useStateValue } from "../StateProvider";
import "./Products.css";

const Products = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        prce: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill("⭐")
            .map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        </div>
      </div>

      <img src={image} alt="img" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Products;
