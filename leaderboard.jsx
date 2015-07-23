// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".
/*
Players = new Mongo.Collection("players");

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    players() {
      return PlayersDomain.getAll();
    },

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

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
                   "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
      _.each(names, function (name) {
        Players.insert({
          name: name,
          score: Math.floor(Random.fraction() * 10) * 5
        });
      });
    }
  });
}
*/
