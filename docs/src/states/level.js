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
        levelSelector = this.add.image(game.world.centerX - 125, 80, 'logo_juego');
        levelSelector.scale.setTo(0.5, 0.5);

        lvl1 = this.add.button(game.world.centerX - 295, 400, 'skeleton', function() { startLevel(1); }, this, 2, 1, 0);
        lvl2 = this.add.button(game.world.centerX - 95, 400, 'skeleton', function() { startLevel(2); }, this, 2, 1, 0);
        lvl3 = this.add.button(game.world.centerX + 105, 400, 'skeleton', function() { startLevel(3); }, this, 2, 1, 0);

        back = this.add.button(50, 500, 'skeleton', function() { game.state.start('menuState'); }, this, 2, 1, 0);
        backText = game.add.text(110, 520, "Volver", style);
    },

    update: function () {

    }
}

function startLevel(number) {
    level = number;
    game.state.start('gameState');
}