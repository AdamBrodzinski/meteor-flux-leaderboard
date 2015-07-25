# meteor-flux-leaderboard
Flux Example with React &amp; Meteor 

***Get the benifits of Relay without the wait or complexity***

- Automatic optimistic UI updates (latency compensation)
- Real time database updates (like Uber's realtime driver location)
- Mini-Mongo client cache (easy clientside querying)
- Query based data subscriptions instead of REST (also API REST supported)
- Data operations in flux are written synchronously because of the optimistic UI


*Plus*

- Universal JS shared on client and server (isomorphic)
- Clean server-side code with fibers (soon with promise ES7 async/await)
- Easy microservice implementations via DDP
- Modular, swap out any default Meteor components you wish



Hot code reload

##### Full Readme coming soon! (See [this readme](https://github.com/AdamBrodzinski/react-ive-meteor) for an explanation of the Meteor parts)

### Useage

- `cd meteor-flux-leaderboard`
- `meteor`
- Open your browser to localhost:3000
- Checkout action/store logs in console after clicking about


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
