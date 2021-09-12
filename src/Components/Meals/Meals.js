import React from "react";
import MealsSummary from "./MealsSummary";
import AvilabeMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvilabeMeals />
    </React.Fragment>
  );
};

export default Meals;
