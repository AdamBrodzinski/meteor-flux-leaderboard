# meteor-flux-leaderboard
Flux Example with React &amp; Meteor 

##### Full Readme coming soon!

- Serverside rendering branch started (shared but not rendering yet)


Key pieces are in CollectionActions/Store, Tracker watches for changes on the Minimongo clientside cache and emits a change event when data changes. This retains all the optimistic UI and realtime data capabilities that Meteor offers.

```
 Tracker.autorun(computation => {
    var docs = Players.find({}).fetch();
    
    if (computation.firstRun) return; // ignore first empty run
    
    this.CollectionActions.playersChanged(docs);
  });
```

