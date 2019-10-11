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

        comprado = this.add.text(game.world.centerX, game.world.centerY + 50, "Comprado!", style);
        comprado.anchor.setTo(0.5);
        comprado.alpha = 0;

        comprarPowerUp = this.add.button(game.world.centerX, game.world.centerY, 'skeleton', function () { comprado.alpha = 1; game.add.tween(comprado).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 1000); }, this, 2, 1, 0);
        comprarPowerUpText = this.add.text(game.world.centerX, game.world.centerY - 30, "Comprar Power Up", style)

        comprarPowerUp.anchor.setTo(0.5);
        comprarPowerUpText.anchor.setTo(0.5);

        back = this.add.button(150, game.world.height - 100, 'botones', function () { game.state.start('menuState'); }, this, 9, 8);
        back.scale.setTo(0.2);
        back.anchor.setTo(0.5);
    },

    update: function () {

    }
}