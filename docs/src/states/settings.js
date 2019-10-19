PunchemOut.settingsState = function () {

}

PunchemOut.settingsState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **SETTINGS** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);


        uk = this.add.button(game.world.width * 0.7, game.world.height * 0.55, 'uk_flag', function () { menuHit.play(); Language = 'english'; });
        uk.anchor.setTo(0.5, 1);
        uk.scale.setTo(game.world.height / 3000);
        spain = this.add.button(game.world.width * 0.3, game.world.height * 0.55, 'spain_flag', function () { menuHit.play(); Language = 'spanish'; });
        spain.anchor.setTo(0.5, 1);
        spain.scale.setTo(game.world.height / 3000);
        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('menuState'); });
    },

    update: function () {

    }
}