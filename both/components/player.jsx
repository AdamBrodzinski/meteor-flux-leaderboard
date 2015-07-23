/*global PlayerStore */

PlayerList = React.createClass({
  propTypes: {
    players: React.PropTypes.array.isRequired
  },

  render() {
    return (
     <ul className="leaderboard">
       {
         this.props.players.map((player) => {
           return (
             <PlayerItem
               key={ player._id }
               selectedPlayerId={ this.state.selectedId }
               player={ player } />
           );
         })
       }
     </ul>
    );
  }
});


PlayerItem = React.createClass({
  handleClick() {
    var playerId = this.props.player._id;
    PlayerActions.selectPlayer(playerId);
  },

  getClassName() {
    var selectedId = this.props.selectedPlayerId;
    var playerId = this.props.player._id;
    return (selectedId === playerId) ? 'player selected' : 'player';
  },

  render() {
    var player = this.props.player;
    return (
      <li className={ this.getClassName() } onClick={ this.handleClick }>
        <span className="name">{ player.name }</span>
        <span className="score">{ player.score }</span>
      </li>
    );
  }
});
