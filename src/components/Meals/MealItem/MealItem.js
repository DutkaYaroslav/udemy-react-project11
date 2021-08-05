import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const priceIs = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceIs}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
