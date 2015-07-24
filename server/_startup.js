/*global alt:true */
console.log("Starting Leaderboard Server...");

// run fixtures if db is empty
Meteor.startup(function () {
  if (Players.find().count() === 0) {
    console.log("Running fixtures...");
    var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
      "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
    names.forEach(function (name) {
      Players.insert({
        name: name,
        score: Math.floor(Random.fraction() * 10) * 5
      });
    });
  }
});
