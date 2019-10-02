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
        nombres = game.add.text(game.world.centerX, 300, 
            "Alejandro Hernández Pérez\nMario Márquez Balduque\nGabriel Muñoz Borchers\nCarlos Ventura Padina González\nDiego Sagredo de Miguel", style);
        nombres.anchor.setTo(0.5)

        back = this.add.button(50, 500, 'skeleton', function() { game.state.start('menuState'); }, this, 2, 1, 0);
        backText = game.add.text(110, 520, "Volver", style);
    },

    update: function () {

    }
}