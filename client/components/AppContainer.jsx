// AppContainer is responsible for fetching data from the store and
// listening for changes. In a larger app you would have a container
// for each major component.

AppContainer = React.createClass({
  getInitialState() {
    return {
      players: [],
      selectedId: '',
      selectedPlayerName: ''
    }
  },
  render() {
    // passes each key of this.state to App as a prop
    return (<App {...this.state} />);
  }
});
