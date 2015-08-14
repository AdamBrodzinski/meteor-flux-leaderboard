// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.

Actions = {};

// used when a mongo players collection changes
Actions.playersChanged = function playersChanged(payload) {
  console.log('[Actions] PLAYERS_CHANGED', payload);
  return {
    type: 'PLAYERS_CHANGED'
  };
};


Actions.incrementScore = function incrementScore() {
  console.log('\n[Actions] INCREMENT_SCORE');
  return {
    type: 'INCREMENT_SCORE'
  };
};


Actions.selectPlayer = function selectPlayer(playerId) {
  console.log('\n[Actions] SELECT_PLAYER', playerId);
  return {
    type: 'SELECT_PLAYER',
    playerId: playerId
  };
};
