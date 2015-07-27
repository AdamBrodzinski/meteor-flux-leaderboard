// AppContainer is responsible for fetching data from the store and
// listening for changes. In a larger app you would have a container
// for each major component.

AppContainer = React.createClass({
  // you can also use mixins to eliminate this boilerplate
  getInitialState() {
    //return PlayerStore.getState();
    return PlayerStore.getInitialState();
  },

  componentDidMount() {
    //PlayerStore.listen(this.onChange);
    this.unlisten = PlayerStore.listen(this.onChange);
  },

  componentWillUnmount() {
    //PlayerStore.unlisten(this.onChange);
    this.unlisten();
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    // passes each key of this.state to App as a prop
    return (<App {...this.state} />);
  }
});
