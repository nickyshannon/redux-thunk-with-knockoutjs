import counterKnockout from "../knockout/init";

const updateKnockout = store => next => action => {
  const newState = next(action);

  action.dependency.update(store);

  return newState;
};

export default updateKnockout;
