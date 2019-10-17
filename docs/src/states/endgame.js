const scoreLength = 10;
var scoreLvl1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var scoreLvl2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var scoreLvl3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var topScore;

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

        Score = 0;

        checkScore();

        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;
        fondoMenu.alpha = 0;

        gameOver = this.add.sprite(game.world.centerX, game.world.height * 0.25, 'game_over');
        gameOver.scale.setTo(game.world.height / 1000);
        gameOver.anchor.setTo(0.5);
        gameOver.alpha = 0;

        waveText = this.add.text(game.world.centerX, game.world.height * 0.5, "Oleada: " + waveNumberFinal, styleSmall);
        waveText.anchor.setTo(0.5);
        waveText.alpha = 0;
        waveText.fontSize = game.world.height * 0.03;

        scoreText = this.add.text(game.world.centerX, game.world.height * 0.55, "Puntuación: " + scoreFinal, styleSmall);
        scoreText.anchor.setTo(0.5);
        scoreText.alpha = 0;
        scoreText.fontSize = game.world.height * 0.03;

        maxComboText = this.add.text(game.world.centerX, game.world.height * 0.6, "Combo máximo: " + maxComboFinal, styleSmall);
        maxComboText.anchor.setTo(0.5);
        maxComboText.alpha = 0;
        maxComboText.fontSize = game.world.height * 0.03;

        if (topScore != 0) {
            CongratsText = this.add.text(game.world.centerX, game.world.height * 0.65, "Enhorabuena!! Has alcanzado el TOP " + topScore, styleSmall);
            CongratsText.anchor.setTo(0.5);
            CongratsText.alpha = 0;
            CongratsText.fontSize = game.world.height * 0.03;
        }

        tryAgain = this.add.button(game.world.width * 0.87, game.world.height * 0.87, 'botones2', function () { game.state.start('gameState'); resetVariables(); }, this, 1, 0);
        tryAgain.scale.setTo(0.7);
        tryAgain.anchor.setTo(1);
        tryAgain.alpha = 0;

        levelSelect = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'levelSelect', function () { game.state.start('levelState'); resetVariables(); }, this,  1, 0);
        levelSelect.scale.setTo(0.7);
        levelSelect.anchor.setTo(0, 1);
        levelSelect.alpha = 0;

        game.add.tween(fondoMenu).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(gameOver).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(waveText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(scoreText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(maxComboText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        if (topScore != 0) game.add.tween(CongratsText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(tryAgain).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.add.tween(levelSelect).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);


    },

    update: function () {

    }
}

function checkScore() {
    switch (level) {
        case 1:
            if (scoreFinal > scoreLvl1[0]) {
                scoreLvl1[0] = scoreFinal;
                scoreLvl1.sort(function (a, b) { return a - b });
                for (var i = 0; i < scoreLength; i++) {
                    if (scoreFinal == scoreLvl1[i]) {
                        topScore = scoreLength % i;
                    }
                }
            }
            break;

        case 2:
            if (scoreFinal > scoreLvl2[0]) {
                scoreLvl2[0] = scoreFinal;
                scoreLvl2.sort(function (a, b) { return a - b });
                for (var i = 0; i < scoreLength; i++) {
                    if (scoreFinal == scoreLvl2[i]) {
                        topScore = scoreLength % i;
                    }
                }
            }
            break;

        case 3:
            if (scoreFinal > scoreLvl3[0]) {
                scoreLvl3[0] = scoreFinal;
                scoreLvl3.sort(function (a, b) { return a - b });
                for (var i = 0; i < scoreLength; i++) {
                    if (scoreFinal == scoreLvl3[i]) {
                        topScore = scoreLength % i;
                    }
                }
            }
            break;
    }

}
