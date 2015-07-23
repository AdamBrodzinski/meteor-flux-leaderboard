/*global alt, PlayerActions */

class PlayerStore {
  constructor() {
    this.bindListeners({
      onSelectPlayer: PlayerActions.selectPlayer,
      onIncrementScore: PlayerActions.incrementScore,
    });

    this.state = {};
  }

  onIncrementScore(opts) {
    console.log('[PlayerStore] incrementScore');
  }

  onSelectPlayer(id) {
    console.log('[PlayerStore] selectPlayer');
    this.setState({selectedId: id});
  }

  updateTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
}

this.PlayerStore = alt.createStore(PlayerStore, 'PlayerStore');
