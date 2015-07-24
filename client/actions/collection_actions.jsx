/*global alt, CollectionActions */

class CollectionActions {
  playersChanged(docs) {
    console.log('[CollectionActions] playersChanged', docs);
    return docs;
  }
}

this.CollectionActions = alt.createActions(CollectionActions);

// watch collections on Minimongo cache and
Meteor.startup(() => {

  Tracker.autorun(computation => {
    var docs = Players.find({}).fetch();
    if (computation.firstRun) return; // ignore first empty run
    console.log('[Tracker] collection changed');
    this.CollectionActions.playersChanged(docs);
  });

});
