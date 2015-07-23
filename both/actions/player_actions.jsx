/*global alt, PlayerActions */

class PlayerActions {
  incrementScore(playerId, amount) {
    console.log('[PlayerActions] incrementScore');
    return {playerId, amount};
  }

  selectPlayer(id) {
    console.log('[PlayerActions] selectPlayer');
    return id;
  }

  refreshPlayersCollection() {
    console.log('[PlayerActions] refresh data');
    return {}; // *note* returning fires call to dispatcher
  }
}

this.PlayerActions = alt.createActions(PlayerActions);
