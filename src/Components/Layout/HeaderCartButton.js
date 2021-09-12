import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import Input from "../UI/Input";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  },[cartCtx.items]);

  const numberOfCartItem = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${btnIsHighlighted ? classes.bump : ""}`}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItem} </span>
    </button>
  );
};

export default HeaderCartButton;
