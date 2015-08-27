const { createStore, combineReducers, applyMiddleware } = Redux;
const { devTools, persistState } = ReduxDevTools;
const { DevTools, DebugPanel, LogMonitor } = ReactReduxDevTools;

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

const rootReducer = combineReducers({
  userInterface: Reducers.userInterface,
  players: Reducers.players,
});

const finalCreateStore =
  applyMiddleware(logger)(
    devTools()(
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))(
        createStore
      )
    )
  );

// applyMiddleware takes createStore() and returns a new wrapped createStore
// note, this is an optional step to use middleware (we're auto console.log dispatches)
// let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
// store = createStoreWithMiddleware(rootReducer);
// 
store = finalCreateStore(rootReducer);
