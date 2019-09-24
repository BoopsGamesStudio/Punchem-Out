PunchemOut.preloadState = function () {

}

PunchemOut.preloadState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **PRELOAD** state");
        }
    },

    preload: function () {
        //Carga de assets
        this.load.image('fondo', 'assets/backgrounds/prueba.png');
        this.load.spritesheet('skeleton', 'assets/sprites/skeleton.png', 64, 64);
    },

    create: function () {

    },

    update: function () {
        game.state.start('menuState')
    }
}