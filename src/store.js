import { legacy_createStore as createStore } from 'redux';

const initState = {
  counter: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { ...state, counter: state.counter + action.counter };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store);

export default store;
