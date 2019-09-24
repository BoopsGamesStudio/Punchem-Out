var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv')

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
game.state.add('levelState', PunchemOut.roomState)
game.state.add('gameState', PunchemOut.gameState)
game.state.add('creditsState', PunchemOut.creditsState)

game.state.start('bootState')

