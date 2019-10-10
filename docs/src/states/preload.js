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
        this.load.image('fondo', 'assets/backgrounds/fondo.jpeg');
        this.load.image('menuPausa', 'assets/menuPausa.png');
        this.load.spritesheet('skeleton', 'assets/sprites/skeleton.png', 64, 64);
        this.load.image('logo_juego', 'assets/logo_juego.png');
        this.load.image('settings', 'assets/sprites/settings.png');
        this.load.spritesheet('link', 'assets/sprites/link.png', 96, 104);
        this.load.spritesheet('spritesheet', 'assets/sprites/spritesheet.png', 72, 128);
        this.load.spritesheet('punch', 'assets/sprites/punch.png', 150, 150);
        this.load.image('game_over', 'assets/sprites/game_over.png');
        this.load.audio('punch', 'assets/sounds/beat.mp3');
    },

    create: function () {
        this.add.image(0, 0, 'loading');
        logo = this.add.image(game.world.centerX - 153, 50, 'logo');

        logo.scale.setTo(0.15, 0.15);
    },

    update: function () {
        game.state.start('menuState')
    }
}