var PunchemOut = {}

PunchemOut.bootState = function () {

}

PunchemOut.bootState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **BOOT** state");
        }
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        //game.scale.pageAlignHorizontally = true;
        //game.scale.pageAlignVertically = true; 
    },

    preload: function () {

        game.stage.disableVisibilityChange = true;
        this.game.renderer.renderSession.roundPixels = true
        this.time.desiredFps = game.global.FPS

        this.load.image('loading', 'assets/loading_screen.png');
        this.load.image('logo', 'assets/logo.png');
    },

    create: function () {

    },

    update: function () {
        game.state.start('preloadState')
    }
}