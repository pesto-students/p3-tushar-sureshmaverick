// import * as actionTypes from "./action-types"

export const increaseValue = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  export const resetValue = () => {
    return {
      type: "RESET",
    };
  };