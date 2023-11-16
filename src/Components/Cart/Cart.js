import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-http-5e9bd-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <section className={`${classes.cart} ${props.className}`}>
      <Card>
        {!isSubmitting && !didSubmit && (
          <>
            {cartitems}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>₹ {totalAmount}</span>
            </div>
            {isCheckout && (
              <Checkout onConfirm={submitHandler} onCancel={props.onClose} />
            )}
            {!isCheckout && (
              <div className={classes.actions}>
                <button
                  className={classes["button--alt"]}
                  onClick={props.onClose}
                >
                  Close
                </button>
                {hasItems && (
                  <button className={classes.button} onClick={orderHandler}>
                    Order
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {isSubmitting && <p>Sending order data...</p>}
        {didSubmit && (
          <>
            <p>Successfully semt the order!</p>
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </>
        )}
      </Card>
    </section>
  );
};

export default Cart;
