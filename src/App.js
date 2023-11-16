import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartHandler = () => {
    setCartIsShown(true);
  };
  const closeHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={cartHandler} />
      <main>
        <Meals />
        {cartIsShown && <Cart onClose={closeHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;
