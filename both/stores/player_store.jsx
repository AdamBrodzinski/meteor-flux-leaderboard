/*global alt, PlayerActions */

class PlayerStore {
  constructor() {
    // listen to actions and call store methods when dispatcher emits action
    this.bindListeners({
      onSelectPlayer: PlayerActions.selectPlayer,
      onIncrementScore: PlayerActions.incrementScore,
      onRefreshPlayersCollection: PlayerActions.refreshPlayersCollection,
    });

    this.state = {
      players: [],
      selectedId: ''
    };

    // temp fetch on start
    Meteor.setTimeout(() => {
      PlayerActions.refreshPlayersCollection();
    }, 800);
  }

  onIncrementScore(opts) {
    console.log('[PlayerStore] incrementScore');
  }

  onSelectPlayer(id) {
    this.setState({selectedId: id});
    console.log('[PlayerStore] selectPlayer');
  }

  // fetch from Minimongo cache and emit state change
  onRefreshPlayersCollection() {
    this.setState({
      players: Player.findLeaders()
    });
    console.log('[PlayerStore] refresh');
  }
}

this.PlayerStore = alt.createStore(PlayerStore, 'PlayerStore');
