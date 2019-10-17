PunchemOut.shopState = function () {

}

PunchemOut.shopState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **SHOP** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        comprado = this.add.text(game.world.centerX, game.world.centerY + 50, "Comprado!", styleSmall);
        comprado.anchor.setTo(0.5);
        comprado.alpha = 0;

        comprarPowerUp = this.add.button(game.world.centerX, game.world.centerY, 'skeleton', function () { comprado.alpha = 1; game.add.tween(comprado).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 1000); }, this, 2, 1, 0);
        comprarPowerUpText = this.add.text(game.world.centerX, game.world.centerY - 30, "Comprar Power Up", styleSmall)

        comprarPowerUp.anchor.setTo(0.5);
        comprarPowerUpText.anchor.setTo(0.5);

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { game.state.start('menuState'); });
    },

    update: function () {

    }
}