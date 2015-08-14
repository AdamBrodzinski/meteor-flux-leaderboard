/*global alt, PlayerActions */

class PlayerActions {
  incrementScore(playerId) {
    console.log('\n[PlayerActions] INCREMENT_SCORE', playerId);
    this.dispatch(playerId);
  }

  selectPlayer(id) {
    console.log('\n[PlayerActions] SELECT_PLAYER');
    this.dispatch(id);
  }
}

this.PlayerActions = alt.createActions(PlayerActions);

// NOTE, if your actions are only passing data through (like above)
// you can use a more terse action creator helper:
//
// var LocationActions = alt.generateActions(
//    'updateLocation',
//    'updateCity',
//    'updateCountry'
//  );
//
