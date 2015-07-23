SelectPlayer = React.createClass({
  propTypes: {
    playerIsSelected: React.PropTypes.bool,
    selectedName: React.PropTypes.string,
  },

  render() {
    if (this.props.playerIsSelected) {
      return (
        <div className="details">
          <div className="name">
            { this.props.selectedName }
          </div>
          <button className="inc">Add 5 points</button>
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
