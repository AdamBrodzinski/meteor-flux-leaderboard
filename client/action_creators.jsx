// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.

Actions = {};

// used when a mongo players collection changes
Actions.playersChanged = function playersChanged(newDocs) {
  console.log('[Actions] PLAYERS_CHANGED', newDocs);
  return {
    type: 'PLAYERS_CHANGED',
    collection: newDocs
  };
};


Actions.incrementScore = function incrementScore(playerId) {
  console.log('\n[Actions] INCREMENT_SCORE');
  // TODO call FAILED action on error
  Players.update({_id: playerId}, {$inc: {score: 5}});
  // don't return result because our collection watcher will
  // send a CHANGED action and update the store
  return { type: 'INCREMENT_SCORE' };
};


Actions.selectPlayer = function selectPlayer(playerId) {
  let player = Players.findOne(playerId);
  let playerName = player.name || "N/A";

  console.log('\n[Actions] SELECT_PLAYER', playerId, player,name);
  return {
    type: 'SELECT_PLAYER',
    playerId: playerId,
    playerName: playerName
  };
};
