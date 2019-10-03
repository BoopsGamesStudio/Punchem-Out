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
        gameOver = this.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'game_over');
        gameOver.alpha = 0;
        
        scoreText = game.add.text(game.world.centerX - 200, game.world.centerY + 100, "Score: " + score, style);
        scoreText.alpha = 0;

        tryAgain = this.add.button(700, 500, 'skeleton', function() { game.state.start('gameState'); resetVariables(); }, this, 2, 1, 0);
        tryAgainText = game.add.text(620, 520, "Try Again", style);

        tryAgain.alpha = 0;
        tryAgainText.alpha = 0;

        back = this.add.button(50, 500, 'skeleton', function() { game.state.start('levelState'); resetVariables(); }, this, 2, 1, 0);
        backText = game.add.text(110, 520, "Select level", style);

        back.alpha = 0;
        backText.alpha = 0;

        game.add.tween(gameOver).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(scoreText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(tryAgain).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(tryAgainText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(back).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(backText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
    },

    update: function () {

    }
}

function resetVariables() {
    life = 1;
    MaxSpawnTime = 1500;
    BaseSpawnTime = 1000;

    enemiesPerWave = 20;
    score = 0;

    enemiesType1 = new Array(maxEnemies);
    enemiesType2 = new Array(maxEnemies);
}