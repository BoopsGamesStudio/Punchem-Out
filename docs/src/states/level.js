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

        lvl1 = this.add.button(game.world.centerX - 295, 400, 'skeleton', function() { game.state.start('gameState'); }, this, 2, 1, 0);
        lvl2 = this.add.button(game.world.centerX - 95, 400, 'skeleton', function() { console.log("[LOG] Nivel no disponible"); }, this, 2, 1, 0);
        lvl2.alpha = 0.3;
        lvl3 = this.add.button(game.world.centerX + 105, 400, 'skeleton', function() { console.log("[LOG] Nivel no disponible"); }, this, 2, 1, 0);
        lvl3.alpha = 0.3;
    },

    update: function () {

    }
}