Meteor.publish('players', function() {
  var cursor = Players.find({}, {fields: {name: 1, score: 1}});
  return cursor;
});
