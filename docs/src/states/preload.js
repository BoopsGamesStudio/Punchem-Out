PunchemOut.preloadState = function () {

}

PunchemOut.preloadState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **PRELOAD** state");
        }
    },

    preload: function () {
        //Imagen de carga
        loadingScreen = this.add.image(0, 0, 'loading');
        loadingScreen.height = game.world.height;
        loadingScreen.width = game.world.width;

        logo = this.add.image(game.world.centerX, game.world.height * 0.4, 'logo');
        logo.anchor.setTo(0.5);
        logo.scale.setTo(game.world.height / 3000);
        
        //Carga de assets

        //imagenes
        this.load.image('fondo', 'assets/backgrounds/fondo.jpeg');
        this.load.image('menuFondo', 'assets/backgrounds/menuFondo.png');
        this.load.image('powerUpCharge', 'assets/sprites/cargaPowerUp.png');
        this.load.image('logo_juego', 'assets/sprites/logo.png');
        //this.load.image('settings', 'assets/sprites/settings.png');
        this.load.image('game_over', 'assets/sprites/game_over.png');
        this.load.image('twitterLogo', 'assets/sprites/twitterLogo.png');
        this.load.image('instagramLogo', 'assets/sprites/instagramLogo.png');
        this.load.image('youtubeLogo', 'assets/sprites/youtubeLogo.png');
        this.load.image('+100', 'assets/sprites/+100.png');
        this.load.image('+300', 'assets/sprites/+300.png');
        this.load.image('puente', 'assets/backgrounds/puente.png');
        this.load.image('madera', 'assets/backgrounds/madera.png');
        this.load.image('powerUpLogo', 'assets/sprites/powerUpLogo.png');

        //spritesheets
        this.load.spritesheet('skeleton', 'assets/sprites/skeleton.png', 64, 64); //placeholders
        //this.load.spritesheet('link', 'assets/sprites/link.png', 96, 104); //placeholders
        //this.load.spritesheet('spritesheet', 'assets/sprites/spritesheet.png', 72, 128);
        this.load.spritesheet('scoreText', 'assets/sprites/scoreText.png', 1437, 642);
        this.load.spritesheet('pauseButton', 'assets/sprites/pauseButton.png', 244.5, 218);
        this.load.spritesheet('levelSelect', 'assets/sprites/levelSelect.png', 752, 199.5);
        this.load.spritesheet('caballero', 'assets/sprites/caballero.png', 72, 128);
        this.load.spritesheet('mago', 'assets/sprites/mago.png', 72, 128);
        this.load.spritesheet('jineteMago', 'assets/sprites/jinete_mago.png', 108, 195.5);
        this.load.spritesheet('jineteCaballero', 'assets/sprites/jinete_caballero.png', 108, 195.5);
        this.load.spritesheet('fuerte', 'assets/sprites/fuerte.png', 108, 192);
        this.load.spritesheet('brujo', 'assets/sprites/hechicero.png', 72, 128);
        this.load.spritesheet('vidas', 'assets/sprites/vidas.png', 945, 436);
        this.load.spritesheet('botones', 'assets/sprites/botones.png', 862, 300);
        this.load.spritesheet('punchL', 'assets/sprites/punchLAnimation.png', 491, 491);
        this.load.spritesheet('punchR', 'assets/sprites/punchRAnimation.png', 491, 491);
        this.load.spritesheet('punchIdle', 'assets/sprites/stillPunch.png', 635, 635);
        this.load.spritesheet('powerUpEffect', 'assets/sprites/powerUpEffect.png', 400, 360);
        this.load.spritesheet('botones2', 'assets/sprites/botones2.png', 916, 427);
        this.load.spritesheet('menuPausa', 'assets/sprites/menuPausa.png', 2048, 2732);

        //audios
        this.load.audio('punch', 'assets/sounds/beat.mp3');
        this.load.audio('track1', 'assets/sounds/track1.mp3');
        this.load.audio('track2', 'assets/sounds/track2.mp3');
        this.load.audio('track3', 'assets/sounds/track3.mp3');
    },

    create: function () {
        
    },

    update: function () {
        game.state.start('menuState');
    }
}
