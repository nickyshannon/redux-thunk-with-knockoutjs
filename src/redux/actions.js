import { INCREMENT, DECREASE } from "./actionTypes";
import counterKnockout from "../knockout/init";

const incrementAction = () => {
  return {
    type: INCREMENT,
    dependency: counterKnockout
  };
};
const decreaseAction = () => {
  return {
    type: DECREASE,
    dependency: counterKnockout
  };
};

export { incrementAction, decreaseAction };
