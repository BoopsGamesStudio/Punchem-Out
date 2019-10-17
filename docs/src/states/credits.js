PunchemOut.creditsState = function () {

}

PunchemOut.creditsState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **CREDITS** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        nombres = game.add.text(game.world.centerX, game.world.centerY,
            "Alejandro Hernández Pérez\nMario Márquez Balduque\nGabriel Muñoz Borchers\nCarlos Ventura Padina González\nDiego Sagredo de Miguel", styleSmall);
        nombres.anchor.setTo(0.5);
        nombres.fontSize = game.world.height * 0.05;

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { game.state.start('menuState'); });
    },

    update: function () {

    }
}