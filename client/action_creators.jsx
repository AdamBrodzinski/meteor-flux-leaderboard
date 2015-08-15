// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.

Actions = {};

// used when a mongo players collection changes
Actions.playersChanged = function playersChanged(newDocs) {
  return {
    type: 'PLAYERS_COLLECTION_CHANGED',
    collection: newDocs
  };
};


// doesn't return payload because our collection watcher
// will send a CHANGED action and update the store
Actions.incrementScore = function incrementScore(playerId) {
  Players.update({_id: playerId}, {$inc: {score: 5}});
  // TODO call FAILED action on error
  return { type: 'INCREMENT_SCORE' };
};


Actions.selectPlayer = function selectPlayer(playerId) {
  let player = Players.findOne(playerId);
  let playerName = player.name || "N/A";

  return {
    type: 'SELECT_PLAYER',
    playerId: playerId,
    playerName: playerName
  };
};
