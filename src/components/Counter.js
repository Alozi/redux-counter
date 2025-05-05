import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  function decrementHandler() {
    dispatch({ type: 'decrement' });
  }

  function incrementHandler() {
    dispatch({ type: 'increment' });
  }

  function increaseHandler() {
    dispatch({ type: 'increase', amount: 5 });
  }

  function toggleCounterHandler() {
    dispatch({ type: 'toogle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
