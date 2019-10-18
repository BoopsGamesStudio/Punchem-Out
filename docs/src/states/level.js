var level;

PunchemOut.levelState = function () {

}

PunchemOut.levelState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **LEVEL** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        logo = this.add.image(game.world.centerX, game.world.height * 0.2, 'logo_juego');
        logo.scale.setTo(game.world.height / 1000);
        logo.anchor.setTo(0.5);

        lvl1 = this.add.button(game.world.width * 0.25, game.world.height * 0.5, 'botones2', function () { menuHit.play(); startState(1, 'gameState'); }, this, 3, 2);
        lvl1.scale.setTo(game.world.height / 800);
        lvl1.anchor.setTo(0.5);

        lvl2 = this.add.button(game.world.centerX, game.world.height * 0.5, 'botones2', function () { menuHit.play(); startState(2, 'gameState'); }, this, 5, 4);
        lvl2.scale.setTo(game.world.height / 800);
        lvl2.anchor.setTo(0.5);

        lvl3 = this.add.button(game.world.width * 0.75, game.world.height * 0.5, 'botones2', function () { menuHit.play(); startState(3, 'gameState'); }, this, 7, 6);
        lvl3.scale.setTo(game.world.height / 800);
        lvl3.anchor.setTo(0.5);

        lvl1Score = game.add.button(lvl1.position.x, lvl1.position.y + game.world.height * 0.1, 'scoreButton', function () { menuHit.play(); startState(1, 'leaderboardState'); }, this);
        lvl1Score.scale.setTo(game.world.height / 1000);
        lvl1Score.anchor.setTo(0.5);

        lvl2Score = game.add.button(lvl2.position.x, lvl1.position.y + game.world.height * 0.1, 'scoreButton', function () { menuHit.play(); startState(2, 'leaderboardState'); }, this);
        lvl2Score.scale.setTo(game.world.height / 1000);
        lvl2Score.anchor.setTo(0.5);

        lvl3Score = game.add.button(lvl3.position.x, lvl1.position.y + game.world.height * 0.1, 'scoreButton', function () { menuHit.play(); startState(3, 'leaderboardState'); }, this);
        lvl3Score.scale.setTo(game.world.height / 1000);
        lvl3Score.anchor.setTo(0.5);

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('menuState'); });

    },

    update: function () {

    }
}

function startState(number, stateName) {
    level = number;
    game.state.start(stateName);
}