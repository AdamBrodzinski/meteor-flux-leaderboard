PlayerList = React.createClass({
  propTypes: {
    players: React.PropTypes.array.isRequired,
    selectedId: React.PropTypes.string.isRequired
  },

  render() {
    if (!this.props.players.length) {
      return (
        <ul className="leaderboard">
          <h2>Loading...</h2>
          <h3>*Simulating* slow server to show optimistic UI</h3>
        </ul>
      );
    }

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
