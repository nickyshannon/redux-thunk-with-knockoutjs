import * as React from "react";
import { connect } from "react-redux";

import {
  incrementAction,
  decreaseAction,
  counterActionCreator
} from "../redux";

class Counter extends React.PureComponent {
  render() {
    const { value, increase, decrease } = this.props;
    return (
      <div>
        <h1>React Counter</h1>
        <h2>{value}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(counterActionCreator(incrementAction)),
  decrease: () => dispatch(counterActionCreator(decreaseAction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
