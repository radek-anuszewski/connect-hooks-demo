import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';
import {Counter} from "./Counter";

const CounterHooksContainer = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return <Counter
    count={count}
    decrement={() => dispatch(decrement())}
    increment={() => dispatch(increment())}
    incrementAsync={value => dispatch(incrementAsync(value))}
    incrementByAmount={value => dispatch(incrementByAmount(value))}
  />
};

export default CounterHooksContainer;
