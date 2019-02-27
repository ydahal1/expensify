import React from "react";
import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
  let decerementBy =
    typeof action.decerementBy === "number"
      ? action.decerementBy
      : action.incrementBy;

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - decerementBy
      };
    case "RESET":
      return {
        count: 12
      };
    default:
      return state;
  }
});

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Action Generators
const incrementCount = (payload = {}) => {
  return {
    type: "INCREMENT",
    incrementBy:
      typeof payload.incrementBy === "number" ? payload.incrementBy : 1
  };
};

//Actions
// Increment action
store.dispatch(incrementCount({ incrementBy: 10 }));

//Decreament
store.dispatch({ type: "DECREMENT", decerementBy: 10 });

// Increment action
store.dispatch({ type: "INCREMENT" });

//Reset count
store.dispatch({ type: "RESET" });

//Destructuring ######################################################
const yadhap = {
  lName: "dahal",
  city: "atlanta",
  temp: "92.1f",
  family: {
    first: "one",
    second: "two",
    third: "three"
  }
};
const { fName = "kashmir", lName, city, temp } = yadhap;
const { first, second, third } = yadhap.family;
console.log(
  `${fName} ${lName} ${temp} ${city}  ${first} ${second} ${third}is a good guy`
);

//Array destructuring
const address = ["jhapa"];

const [cityp, addresses = "bhutan"] = address;
console.log(`Yadhap you are in ${addresses} ${cityp}`);

const Test = () => {
  return <div>Thisis a test page</div>;
};

export default Test;
