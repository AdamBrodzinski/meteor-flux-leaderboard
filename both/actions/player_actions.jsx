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
}

this.PlayerActions = alt.createActions(PlayerActions);
