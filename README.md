# meteor-flux-leaderboard
Flux Example with React &amp; Meteor 

***Get the benifits of Relay without the wait or complexity***

- Automatic optimistic UI updates (latency compensation)
- Real time database updates (like Uber's realtime driver location)
- Mini-Mongo client cache (easy clientside querying)
- Query based data subscriptions instead of REST (also API REST supported)
- Data operations in flux are written synchronously because of the optimistic UI


*Plus*

- Hot code reload
- Universal JS shared on client and server (isomorphic)
- Clean server-side code with fibers (soon with promise ES7 async/await)
- Easy microservice implementations via DDP
- Modular, swap out any default Meteor components you wish

### Different Flux examples
- Alt: master branch
- Redux: [redux branch](https://github.com/AdamBrodzinski/meteor-flux-leaderboard/tree/redux)
- Reflux: [reflux-branch](https://github.com/AdamBrodzinski/meteor-flux-leaderboard/tree/reflux-example) branch

<br>
***Make sure to open the console to see the lifecycle***  

![logs](https://s3.amazonaws.com/f.cl.ly/items/42211v2N2K2Z0n0W0Z3o/logs.png)


![Example Photo](https://s3.amazonaws.com/f.cl.ly/items/0Q181k182k0Z2C3g0Q04/screen2.png)


##### Full Readme coming soon! (See [this readme](https://github.com/AdamBrodzinski/react-ive-meteor) for an explanation of the Meteor parts)

### Usage

- `cd meteor-flux-leaderboard`
- `meteor`
- Open your browser to localhost:3000
- Checkout action/store logs in console after clicking about


<br>
### Todo 

- [X] Basic functinality
- [ ] Handle hot code reload (snapshot and restore on reload)
- [ ] Serverside rendering branch (started, shared files but no SSR)
- [ ] Immutible stores for rendering performance
- [ ] React Router using actions

Key pieces are in CollectionActions/Store, Tracker watches for changes on the Minimongo clientside cache and emits a change event when data changes. This retains all the optimistic UI and realtime data capabilities that Meteor offers.

```
 Tracker.autorun(computation => {
    var docs = Players.find({}).fetch();
    
    if (computation.firstRun) return; // ignore first empty run
    
    this.CollectionActions.playersChanged(docs);
  });
```

This is simplified by using a helper package, though I think it's important to know how it works.

```
trackCollection(Players, CollectionActions.playersChanged);
```

### Alt perks

Alt lets you take snapshots of your apps state and can undo/redo state as needed. You can use this to capture your app state on an error then send log it for debugging remotely. 

A chrome extension is availible to help with local debugging:  
https://www.youtube.com/watch?v=LUksOCuRjkE


### Contributors:

- [donaldaverill](https://github.com/donaldaverill)
- [levid](https://github.com/levid)
