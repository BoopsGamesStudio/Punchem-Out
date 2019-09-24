PunchemOut.menuState = function () {

}

PunchemOut.menuState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **MENU** state");
        }
    },

    preload: function () {

    },

    create: function () {
        //Add logo and buttons
    },

    update: function () {
        game.state.start('gameState');
    }
}