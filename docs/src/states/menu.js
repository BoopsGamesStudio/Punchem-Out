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
        logo = this.add.image(game.world.centerX - 125, 80, 'logo_juego');
        logo.scale.setTo(0.5, 0.5);

        contacto = this.add.button(50, 490, 'logo', function() { window.location.href = "https://github.com/BoopsGamesStudio/Punchem-Out"; });
        contacto.scale.setTo(0.03, 0.03);

        //cambiar estos sprites por un boton con tres estados del spritesheet para cuando pase el raton por encima y cuando este siendo pulsado
        jugar = this.add.button(game.world.centerX - 95, 350, 'skeleton', function() { game.state.start('levelState'); }, this, 2, 1, 0);
        creditos = this.add.button(game.world.centerX - 95, 450, 'skeleton', function() { game.state.start('creditsState'); }, this, 2, 1, 0);

        settings = this.add.button(700, 500, 'settings', function() { game.state.start('settingsState'); });
        settings.scale.setTo(0.5, 0.5);
    },

    update: function () {
        
    }
}