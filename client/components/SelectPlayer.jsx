SelectPlayer = React.createClass({
  propTypes: {
    selectedName: React.PropTypes.string,
    selectedId: React.PropTypes.string,
  },

  handleClick() {
    PlayerActions.incrementScore(this.props.selectedId);
  },

  render() {
    if (this.props.selectedPlayerName) {
      return (
        <div className="details">
          <div className="name">{ this.props.selectedPlayerName }</div>
          <button className="inc" onClick={this.handleClick}>
            Add 5 points
          </button>
        </div>
      );
    }
    else {
      return (
        <div className="message">Click a player to select</div>
      );
    }
  }
});
