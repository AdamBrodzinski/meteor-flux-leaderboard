let { createStore, combineReducers } = Redux;

// Redux has a single store. to reduce complexity it allows you to
// combine several 'reducers' that share this single state object.
// They are combined into one root reducer which is passed to the store

let rootReducer = combineReducers({
  // TODO create reducers
});

store = createStore(rootReducer);
