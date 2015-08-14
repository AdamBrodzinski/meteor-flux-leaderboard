let { createStore, combineReducers } = Redux;

// Redux has a single store. to reduce complexity it allows you to combine
// several 'reducer' functions that share this single state object.
// They are combined into one root reducer which is passed to the store
//
// the shape of root reducer will then look like:
//    {
//      userInterface: {
//        selectedId: 'ds34sjsa34',
//        selectedPlayerName: 'Bob Smith'
//      },
//      players: [
//        { mongo doc },
//        { mongo doc },
//        { mongo doc }
//      ]
//    }

let rootReducer = combineReducers({
  userInterface: Reducers.userInterface,
  players: Reducers.players,
});

store = createStore(rootReducer);
