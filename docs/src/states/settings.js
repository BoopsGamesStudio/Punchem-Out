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
        back = this.add.button(50, 500, 'skeleton', function() { game.state.start('menuState'); }, this, 2, 1, 0);
        backText = game.add.text(110, 520, "Volver", style);
    },

    update: function () {
        
    }
}