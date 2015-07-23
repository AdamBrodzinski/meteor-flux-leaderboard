PlayerActions = {
  incrementScore: function(playerId, amount) {
    return PlayersDomain.handleIncrementScore(playerId, amount);
    // other domains can update based on this action if they want to
    // FooDomain.handlePlayerIncrementScore(playerId, amount);
    // BarDomain.handlePlayerIncrementScore(playerId, amount);
  },

  selectPlayer: function(id) {
    PlayersDomain.handleSelectPlayer(id);
  }
};
