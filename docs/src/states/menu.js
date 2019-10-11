PunchemOut.menuState = function () {

}

var style = { font: "15px Arial", fill: "#ffffff", align: "center" };
var style2 = { font: "30px Arial", fill: "#ffffff", align: "center" };
var style3 = { font: "80px Arial", fill: "#000000", align: "center" };
//var style4 = { font: "15px Arial", fill: "#000000", align: "center" };

PunchemOut.menuState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **MENU** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        logo = this.add.image(game.world.centerX, 170, 'logo_juego');
        logo.scale.setTo(0.4, 0.4);
        logo.anchor.setTo(0.5);

        contacto = this.add.button(120, game.world.height - 100, 'logo', function () { game.state.start('socialmediaState'); });
        contacto.scale.setTo(0.07, 0.07);
        contacto.anchor.setTo(0.5);

        settings = this.add.button(game.world.width - 120, game.world.height - 100, 'botones', function () { game.state.start('settingsState'); }, this, 7, 6);
        settings.scale.setTo(0.2, 0.2);
        settings.anchor.setTo(0.5);
        
        jugar = this.add.button(game.world.centerX, 300, 'botones', function () { game.state.start('levelState'); }, this, 1, 0);
        jugar.scale.setTo(0.2);
        jugar.anchor.setTo(0.5);

        shop = this.add.button(game.world.centerX, 400, 'botones', function () { game.state.start('shopState'); }, this, 3, 2);
        shop.scale.setTo(0.2);
        shop.anchor.setTo(0.5);

        creditos = this.add.button(game.world.centerX, 500, 'botones', function () { game.state.start('creditsState'); }, this, 5, 4);
        creditos.scale.setTo(0.2);
        creditos.anchor.setTo(0.5);
    },

    update: function () {

    }
}