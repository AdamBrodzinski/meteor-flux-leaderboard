// IMPORTANT, see both/models/player.jsx to see where this action
// is being triggered on the collection data change

class CollectionActions {
  playersChanged(docs) {
    console.log('[CollectionActions] PLAYERS_CHANGED', docs);
    this.dispatch(docs);
  }
}

this.CollectionActions = alt.createActions(CollectionActions);


// NOTE, if your actions are only passing data through (like above)
// you can use a more terse action creator helper:
//
// var LocationActions = alt.generateActions(
//    'updateLocation',
//    'updateCity',
//    'updateCountry'
//  );
//
