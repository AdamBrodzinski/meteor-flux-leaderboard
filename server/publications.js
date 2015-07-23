Meteor.publish('players', function() {
  var cursor = Players.find({}, {fields: {name: 1, score: 1}});
  // simulate latency to show optimistic UI
  Meteor._sleepForMs(2000);
  return cursor;
});
