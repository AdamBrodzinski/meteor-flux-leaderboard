/*global alt, PlayerActions */

class PlayerActions {
  incrementScore(playerId, amount) {
    console.log('\n[PlayerActions] incrementScore');
    return {playerId, amount};
  }

  selectPlayer(id) {
    console.log('\n[PlayerActions] selectPlayer');
    return id;
  }
}

this.PlayerActions = alt.createActions(PlayerActions);
