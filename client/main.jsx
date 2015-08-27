Meteor.startup(function() {
  React.render(
    <div>
      <Provider store={store}>
        { () => <AppContainer /> }
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    document.getElementById('app'));
});
