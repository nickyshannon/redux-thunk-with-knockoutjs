import { incrementAction, decreaseAction } from "./actions";

const counterActionCreator = action => {
  return (dispatch, getState) => {
    dispatch(action());
    action().dependency.update(getState());

    // other side effects
  };
};

export default counterActionCreator;
