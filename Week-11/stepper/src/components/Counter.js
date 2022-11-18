import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const light = useSelector(state => state.lightToggle)


  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const resetHandler = () => {
    dispatch({ type: 'reset' })
  }

  const toggleLightHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={light ? classes.counterLight : classes.counterDark}>
      <h1>Footstep Counter</h1>
      <div className={classes.value}> You've walked {counter} steps today!</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleLightHandler}>Flip Light</button>
    </main>
  );
};

export default Counter;
