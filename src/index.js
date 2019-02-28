import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import Counter from "./components/Counter";

import counterKnockout from "./knockout/init";

// react
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
const rootElement = document.getElementById("root");
render(<App />, rootElement);

// knockout
counterKnockout.setup(store);
