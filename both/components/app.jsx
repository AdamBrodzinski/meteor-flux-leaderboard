/* jshint maxlen: false */

App = React.createClass({
  propTypes: {
    players: React.PropTypes.array,
  },

  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Leaderboard</h1>
        <div className="subtitle">Select a scientist to give them points</div>

        <div>
          <PlayerList players={ this.props.players } />
        </div>

        <SelectPlayer />
      </div>
    );
  }
});
