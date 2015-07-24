/*global alt, PlayerActions */

class PlayerActions {
  incrementScore(playerId) {
    console.log('\n[PlayerActions] incrementScore', playerId);
    return playerId;
  }

  selectPlayer(id) {
    console.log('\n[PlayerActions] selectPlayer');
    return id;
  }
}

this.PlayerActions = alt.createActions(PlayerActions);
