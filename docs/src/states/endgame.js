PunchemOut.endgameState = function () {

}

PunchemOut.endgameState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **ENDGAME** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;
        fondoMenu.alpha = 0;

        gameOver = this.add.sprite(game.world.centerX, game.world.height * 0.25, 'game_over');
        gameOver.anchor.setTo(0.5);
        gameOver.alpha = 0;
        
        waveText = this.add.text(game.world.centerX, game.world.height * 0.6, "Wave: " + waveNumber, style);
        waveText.anchor.setTo(0.5);
        waveText.alpha = 0;
        
        scoreText = this.add.text(game.world.centerX, game.world.height * 0.65, "Score: " + score, style);
        scoreText.anchor.setTo(0.5);
        scoreText.alpha = 0;

        maxComboText = this.add.text(game.world.centerX, game.world.height * 0.7, "MaxCombo: " + maxCombo, style);
        maxComboText.anchor.setTo(0.5);
        maxComboText.alpha = 0;

        tryAgain = this.add.button(game.world.width * 0.85, game.world.height * 0.8, 'skeleton', function() { game.state.start('gameState'); resetVariables(); }, this, 2, 1, 0);
        tryAgain.anchor.setTo(0.5);
        tryAgain.alpha = 0;

        //TEMPORAL
        tryAgainText = this.add.text(game.world.width * 0.85, game.world.height * 0.8, "Try Again", style);
        tryAgainText.anchor.setTo(0.5);
        tryAgainText.alpha = 0;

        back = this.add.button(game.world.width * 0.15, game.world.height * 0.8, 'botones', function () { game.state.start('levelState'); resetVariables(); }, this, 9, 8);
        back.scale.setTo(0.2);
        back.anchor.setTo(0.5);
        back.alpha = 0;
        
        game.add.tween(fondoMenu).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(gameOver).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(waveText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(scoreText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(maxComboText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(tryAgain).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(tryAgainText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(back).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
    },

    update: function () {

    }
}