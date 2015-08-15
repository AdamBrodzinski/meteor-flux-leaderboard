# meteor-flux-leaderboard
Flux Example with React &amp; Meteor

## Redux Example

Please read the fantastic Redux guide before/after diving into this. At first it may seem very complex
but it turns out to be very simple once you understand the reducer flow.

###### [Redux Guide](http://rackt.github.io/redux/index.html)

Basic gist (from Redux guide):

```javascript
import { createStore } from 'redux';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is you should
 * return a new object if the state changes, instead of mutating the parameter.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) that makes sense for your project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// Create a Redux store that holds the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter);

// You can subscribe to the updates manually, or use bindings to your view layer.
store.subscribe(() =>
  console.log(store.getState())
);

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```

and to hook it up to a React component you just use `connect`


```
let AppContainer = React.createClass({
  render() {
    return (<App {...this.props} />);
  }
});

// choose what slice of state we send to the component & it's children
function mapStateToProps(state) {
  return {
    players: state.players,
    selectedId: state.userInterface.selectedId,
  };
}

this.AppContainer = connect(mapStateToProps)(AppContainer);
```


### Useage

- `cd meteor-flux-leaderboard`
- `git checkout redux`
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
