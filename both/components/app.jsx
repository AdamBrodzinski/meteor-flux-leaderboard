/* jshint maxlen: false */

App = React.createClass({
  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Leaderboard</h1>
        <div className="subtitle">Select a scientist to give them points</div>

        <div>
          <PlayerList />
        </div>

        <SelectPlayer />
      </div>
    );
  }
});
