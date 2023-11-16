import React from "react";
import Wrapper from "../UI/Wrapper";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Wrapper>
      <MealsSummary />
      <AvailableMeals />
    </Wrapper>
  );
};

export default Meals;
