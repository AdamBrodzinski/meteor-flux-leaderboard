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
      selectedId: '',
      selectedPlayerName: ''
    };

    console.log('[PlayerStore] subscribing to "players"');
    Meteor.subscribe('players'); // this could go in the AppContainer instead
  }

  onIncrementScore(docId) {
    //Player.incrementScore() could use a fat model also
    Players.update({_id: docId}, {$inc: {score: 5}});
    // no setState required since tracker will fire a change
    console.log('[PlayerStore] incrementScore');
  }

  onSelectPlayer(docId) {
    var player = Players.findOne({_id: docId}) || {};

    this.setState({
      selectedId: docId,
      selectedPlayerName: player.name
    });
    console.log('[PlayerStore] selectPlayer');
  }

  onPlayersChanged(playerDocs) {
    // we could use `playerDocs` instead but it's not sorted
    this.setState({ players: Player.findLeaders() });
    console.log('[PlayerStore] updating state');
  }
}

this.PlayerStore = alt.createStore(PlayerStore, 'PlayerStore');
