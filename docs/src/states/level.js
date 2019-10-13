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
        logo.scale.setTo(game.world.height / 1500);
        logo.anchor.setTo(0.5);

        lvl1 = this.add.button(game.world.width * 0.3, game.world.centerY, 'skeleton', function () { startLevel(1); }, this, 2, 1, 0);
        lvl1.anchor.setTo(0.5);

        lvl2 = this.add.button(game.world.centerX, game.world.centerY, 'skeleton', function () { startLevel(2); }, this, 2, 1, 0);
        lvl2.anchor.setTo(0.5);

        lvl3 = this.add.button(game.world.width * 0.7, game.world.centerY, 'skeleton', function () { startLevel(3); }, this, 2, 1, 0);
        lvl3.anchor.setTo(0.5);

        back = this.add.button(game.world.width * 0.15, game.world.height * 0.8, 'botones', function () { game.state.start('menuState'); }, this, 9, 8);
        back.scale.setTo(0.2);
        back.anchor.setTo(0.5);
    },

    update: function () {

    }
}

function startLevel(number) {
    level = number;
    game.state.start('gameState');
}