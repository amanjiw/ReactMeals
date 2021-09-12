import React, { useContext } from "react";
import MealIteForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });

  };

  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <MealIteForm onAddToCart={AddToCartHandler} />
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
