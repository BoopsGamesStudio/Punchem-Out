PunchemOut.menuState = function () {

}

var style = { font: "15px Arial", fill: "#ffffff", align: "center" };
var style2 = { font: "30px Arial", fill: "#ffffff", align: "center" };
var style3 = { font: "80px Arial", fill: "#000000", align: "center" };
var style4 = { font: "15px Arial", fill: "#000000", align: "center" };

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
        jugar = this.add.button(game.world.centerX - 95, 300, 'skeleton', function() { game.state.start('levelState'); }, this, 2, 1, 0);
        shop = this.add.button(game.world.centerX - 95, 400, 'skeleton', function() { game.state.start('shopState'); }, this, 2, 1, 0);
        creditos = this.add.button(game.world.centerX - 95, 500, 'skeleton', function() { game.state.start('creditsState'); }, this, 2, 1, 0);

        jugarText = this.add.text(game.world.centerX - 30, 330, "Jugar", style)
        shopText = this.add.text(game.world.centerX - 30, 430, "Tienda", style)
        creditosText = this.add.text(game.world.centerX - 30, 530, "Creditos", style)

        settings = this.add.button(700, 500, 'settings', function() { game.state.start('settingsState'); });
        settings.scale.setTo(0.5, 0.5);
    },

    update: function () {
        
    }
}