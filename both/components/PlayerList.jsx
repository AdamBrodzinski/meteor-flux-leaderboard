PlayerList = React.createClass({
  propTypes: {
    players: React.PropTypes.array.isRequired,
    selectedId: React.PropTypes.string.isRequired
  },

  render() {
    return (
     <ul className="leaderboard">
       {
         this.props.players.map((player) => {
           return (
             <PlayerItem
               key={ player._id }
               selectedPlayerId={ this.props.selectedId }
               player={ player } />
           );
         })
       }
     </ul>
    );
  }
});
