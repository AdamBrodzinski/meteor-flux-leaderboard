# meteor-flux-leaderboard
Flux Example with React &amp; Meteor 

##### Full Readme coming soon!

### Useage

- `cd meteor-flux-leaderboard`
- `meteor`
- Open your browser to localhost:3000


<br>

### Notes 

- Serverside rendering branch started (shared but not rendering yet)

Key pieces are in CollectionActions/Store, Tracker watches for changes on the Minimongo clientside cache and emits a change event when data changes. This retains all the optimistic UI and realtime data capabilities that Meteor offers.

```
 Tracker.autorun(computation => {
    var docs = Players.find({}).fetch();
    
    if (computation.firstRun) return; // ignore first empty run
    
    this.CollectionActions.playersChanged(docs);
  });
```

### Alt perks

Alt lets you take snapshots of your apps state and can undo/redo state as needed. You can use this to capture your app state on an error then send log it for debugging remotely. 

A chrome extension is availible to help with local debugging:  
https://www.youtube.com/watch?v=LUksOCuRjkE
