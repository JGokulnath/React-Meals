import React from "react";
import Wrapper from "../UI/Wrapper";
import imgSrc from "../../Assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Wrapper>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgSrc} alt="A table full of delicious food!" />
      </div>
    </Wrapper>
  );
};

export default Header;
