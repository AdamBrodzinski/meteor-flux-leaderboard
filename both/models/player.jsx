// note, insecure is turned on for this demo in a production app you'll
// want to remove this and setup allow/deny rules for security.
// see github.com/AdamBrodzinski/react-ive-meteor models for more info

// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players". On the client
// it's a local cache that can be queried with MongoDB syntax. You have
// to publish data and subscribe to pull it into this cache
Players = new Mongo.Collection("players");


if (Meteor.isClient) {
  // watch collections on Minimongo cache and trigger action on change
  Meteor.startup(() => {

    Tracker.autorun(computation => {
      var docs = Players.find({}).fetch();
      if (computation.firstRun) return; // ignore first empty run
      console.log('\n[Tracker] collection changed');
      this.CollectionActions.playersChanged(docs);
    });

  });
}


Player = {
  create() {
  },

  read() {
  },

  update() {
  },

  destroy() {
  },

  findLeaders() {
    return Players.find({}, { sort: { score: -1, name: 1 } }).fetch();
  }
};
