/*global alt, PlayerActions */

class PlayerStore {
  constructor() {
    // listen to actions and call store methods when dispatcher emits action
    this.bindListeners({
      onSelectPlayer: PlayerActions.selectPlayer,
      onIncrementScore: PlayerActions.incrementScore,
    });

    this.state = {
      players: Player.findLeaders(),
      selectedId: ''
    };

    if (Meteor.isClient) {
      Meteor.subscribe('players');
      setTimeout(this._watchForPlayerChanges.bind(this), 0);
    }
  }

  onIncrementScore(opts) {
    console.log('[PlayerStore] incrementScore');
  }

  onSelectPlayer(id) {
    this.setState({selectedId: id});
    console.log('[PlayerStore] selectPlayer');
  }

  _watchForPlayerChanges() {
    // tracker will observe collection for changes and re-run on change
    Tracker.autorun(() => {
      var newPlayerData = Player.findLeaders();
      this.setState({ players: newPlayerData });
      console.log('[PlayerStore] data refreshed');
    });
  }
}

this.PlayerStore = alt.createStore(PlayerStore, 'PlayerStore');
