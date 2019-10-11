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

        back = this.add.button(150, game.world.height - 100, 'botones', function () { game.state.start('menuState'); }, this, 9, 8);
        back.scale.setTo(0.2);
        back.anchor.setTo(0.5);
    },

    update: function () {

    }
}