import React from "react";
import "./index.css";

const Card = (props) => {
    console.log(props);
    console.log(props.itemData);
    const { id, name, description } =  props.itemData
    const { basket ,setbasket } =  props.basket
  const handleClick = () => {

    const newItem = {id, name, description };

    const newBasket = [...basket, newItem];
    setbasket(newBasket)
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  return (
    <>
      <div className="Card">
        <h3>{name}</h3>
        <h6>{description}</h6>
        <button onClick={handleClick} className="btnBasket">
          baskete elave et
        </button>
      </div>
    </>
  );
};

export default Card;
