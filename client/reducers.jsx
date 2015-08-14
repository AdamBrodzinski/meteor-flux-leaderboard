// reducers allow you to 'slice' off a part of the single state object which
// lets you think about the domain in a smaller picture. You could use one
// reducer in a small app like this but in large apps this reducer could be
// several hundred lines. See store.jsx to see how these reducers get 'combined'
// into one single app state. We'll use two reducers, one for transient state
// that the UI uses (selected id,name) and one for data (coming from Mongo)

let { incrementScore, selectPlayer, playersChanged } = Actions;
Reducers = {};

let initialInterfaceState = {
  selectedId: '',
  selectedPlayerName: ''
}

// helper to *copy* old state and merge new data with it
function merge(oldState, newState) {
  return _.extend({}, oldState, newState);
}

// these reducers *must* be pure to use time-travel dev-tools

Reducers.userInterface = function userInterface(state, action) {
  state = state || initialInterfaceState;

  switch (action.type) {
    case 'CHANGE_NAME':
      return state;

    case 'SELECT_PLAYER':
      return merge(state, {
        selectedId: action.playerId,
        selectedPlayerName: action.playerName
      });

    default:
      debugger
      return state;
  }
}

// using the ES6 default params instead of the manual check like above

Reducers.players = function players(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return state;
    default:
      return state;
  }
}
