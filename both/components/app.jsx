/* jshint maxlen: false */

App = React.createClass({
  propTypes: {
    players: React.PropTypes.array,
    selectedId: React.PropTypes.string,
  },

  render() {
    console.log('[Render] App')
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Leaderboard</h1>
        <div className="subtitle">Select a scientist to give them points</div>

        <div>
          <PlayerList {...this.props} />
        </div>

        <SelectPlayer />
      </div>
    );
  }
});
