PlayersDomain = {
  // returns Array of players document Objects
  getAll: function() {
    return Players.find({}, { sort: { score: -1, name: 1 } });
  },

  // returns doc id String
  getSelectedPlayerId: function() {
    return Session.get("selectedPlayer");
  },

  // returns full name String
  getSelectedName: function() {
    var selectedId = Session.get("selectedPlayer");
    var player = Players.findOne({_id: selectedId});
    return player && player.name;
  },

  // shouldn't be called directly from a template, only an action
  handleSelectPlayer: function(id) {
    Session.set("selectedPlayer", id);
  },

  // shouldn't be called directly from a template, only an action
  // returns number of docs updated
  handleIncrementScore: function(docId, amount) {
    return Players.update({_id: docId}, {$inc: {score: amount}});
  }
};
