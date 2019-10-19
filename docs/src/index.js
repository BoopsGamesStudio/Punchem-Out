var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'gameDiv')

// GLOBAL VARIABLES
game.global = {
	FPS: 30,
	DEBUG_MODE: true,
	DEBUG_UPDATE: false,
}

//PHASER SCENE CONFIGURATOR
game.state.add('bootState', PunchemOut.bootState)
game.state.add('preloadState', PunchemOut.preloadState)
game.state.add('endgameState', PunchemOut.endgameState)
game.state.add('menuState', PunchemOut.menuState)
game.state.add('settingsState', PunchemOut.settingsState)
game.state.add('socialmediaState', PunchemOut.socialmediaState)
game.state.add('shopState', PunchemOut.shopState)
game.state.add('levelState', PunchemOut.levelState)
game.state.add('gameState', PunchemOut.gameState)
game.state.add('creditsState', PunchemOut.creditsState)
game.state.add('leaderboardState', PunchemOut.leaderboardState)
game.state.add('infoState', PunchemOut.infoState);

game.state.start('bootState')

