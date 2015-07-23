// note, insecure and autopublish are turned on for this demo
// in a production app you'll want to setup these.

// setup a mongo collection for both server and client Minimogo cache
Players = new Mongo.Collection("players");

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
