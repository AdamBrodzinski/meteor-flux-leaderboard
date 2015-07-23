/*global alt, PlayerActions */

class PlayerStore {
  constructor() {
    // listen to actions and call store methods when dispatcher emits action
    this.bindListeners({
      onSelectPlayer: PlayerActions.selectPlayer,
      onIncrementScore: PlayerActions.incrementScore,
      onPlayersChanged: CollectionActions.playersChanged,
    });

    this.state = {
      players: Player.findLeaders(),
      selectedId: ''
    };

    if (Meteor.isClient) {
      console.log('[PlayerStore] subscribing to "players"');
      Meteor.subscribe('players'); // this could go in the AppContainer instead
    }
  }

  onIncrementScore(opts) {
    console.log('[PlayerStore] incrementScore');
  }

  onSelectPlayer(id) {
    this.setState({selectedId: id});
    console.log('[PlayerStore] selectPlayer');
  }

  onPlayersChanged(playerDocs) {
    // we could use `playerDocs` instead but it's not sorted
    this.setState({ players: Player.findLeaders() });
    console.log('[PlayerStore] updating state');
  }
}

this.PlayerStore = alt.createStore(PlayerStore, 'PlayerStore');
