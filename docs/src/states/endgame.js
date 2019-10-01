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
        
        game.add.tween(gameOver).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);

        var style = { font: "50px Arial", fill: "#ffffff", align: "center" };

        var scoreText = game.add.text(game.world.centerX - 200, game.world.centerY + 100, "Score: " + score, style);
        scoreText.alpha = 0;

        game.add.tween(scoreText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
    },

    update: function () {

    }
}