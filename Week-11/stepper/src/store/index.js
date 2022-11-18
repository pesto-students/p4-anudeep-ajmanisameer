import { createStore } from 'redux'


// reducer function to mutate values
// should be a pure function, no data fetch/ manupulation
// receives old state and action, and must return an object

const initialState = {counter: 0, lightToggle: true}
const counterReducer = (state = initialState, action) => {

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      lightToggle: state.lightToggle
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      lightToggle: state.lightToggle
    }
  }
  if (action.type === 'reset') {
    return {
      counter: state.counter = 0,
      lightToggle: state.lightToggle

    }
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter = 0,
      lightToggle: !state.lightToggle
    }
  }
  return state;
}

const store = createStore(counterReducer)

export default store;

