import React from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';
import {Counter} from "./Counter";
import {connect} from "react-redux";

const CounterConnectContainer = props => {
  return <Counter {...props} />
}

const mapStateToProps = state => ({
  count: state.counter.value,
})

const mapDispatchToProps = {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterConnectContainer);
