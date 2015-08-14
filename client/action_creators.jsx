Actions = {};

Actions.playersChanged = function playersChanged(payload) {
  console.log('[CollectionActions] PLAYERS_CHANGED', payload);
  return {
    type: 'PLAYERS_CHANGED'
  };
};


Actions.incrementScore = function incrementScore() {
  console.log('\n[PlayerActions] INCREMENT_SCORE');
  return {
    type: 'INCREMENT_SCORE'
  };
};


Actions.selectPlayer = function selectPlayer(playerId) {
  console.log('\n[PlayerActions] SELECT_PLAYER', playerId);
  return {
    type: 'SELECT_PLAYER',
    playerId: playerId
  };
};
