var PunchemOut = {}

PunchemOut.bootState = function () {

}

PunchemOut.bootState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **BOOT** state");
        }
    },

    preload: function () {

        game.stage.disableVisibilityChange = true;
        this.game.renderer.renderSession.roundPixels = true
        this.time.desiredFps = game.global.FPS

    },

    create: function () {

    },

    update: function () {
        game.state.start('preloadState')
    }
}