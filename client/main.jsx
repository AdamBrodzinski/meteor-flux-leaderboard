Meteor.startup(function() {
  React.render(
    <Provider store={store}>
      { () => <AppContainer /> }
    </Provider>,
    document.getElementById('app'));
});
