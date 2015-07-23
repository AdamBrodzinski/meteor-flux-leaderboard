// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".
/*

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    selectedName() {
      return PlayersDomain.getSelectedName();
    },

    selectedPlayerId() {
      return PlayersDomain.getSelectedPlayerId();
    },

    PlayerList() {
      return PlayerList;
    }
  });

  Template.leaderboard.events({
    'click .inc'() {
      var playerId = Session.get("selectedPlayer");
      PlayerActions.incrementScore(playerId, 5);
    }
  });
}
*/
