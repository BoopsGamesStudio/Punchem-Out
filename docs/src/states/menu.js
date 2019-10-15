PunchemOut.menuState = function () {

}

var styleSmall = { font: "15px Arial", fill: "#ffffff", align: "center" };
var styleMedium = { font: "20px Arial", fill: "#000000", align: "center" };
var styleBig = { font: "80px Arial Black", fill: "#000000", align: "center" };
var styleAux = { font: "30px Arial", fill: "#ffffff", align: "center" };

var fondoMenu;
var logo;
var contacto;
var settings;
var jugar;
var shop;
var creditos;

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

        logo = this.add.image(game.world.centerX, game.world.height * 0.2, 'logo_juego');
        logo.scale.setTo(game.world.height / 1500);
        logo.anchor.setTo(0.5);

        contacto = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'logo', function () { game.state.start('socialmediaState'); });
        contacto.scale.setTo(0.07, 0.07);
        contacto.anchor.setTo(0, 1);

        settings = this.add.button(game.world.width * 0.87, game.world.height * 0.87, 'botones', function () { game.state.start('settingsState'); }, this, 7, 6);
        settings.scale.setTo(0.2, 0.2);
        settings.anchor.setTo(0.7, 1);

        jugar = this.add.button(game.world.centerX, game.world.centerY, 'botones', function () { game.state.start('levelState'); }, this, 1, 0);
        jugar.scale.setTo(0.2);
        jugar.anchor.setTo(0.5);

        shop = this.add.button(game.world.centerX, game.world.height * 0.65, 'botones', function () { game.state.start('shopState'); }, this, 3, 2);
        shop.scale.setTo(0.2);
        shop.anchor.setTo(0.5);

        creditos = this.add.button(game.world.centerX, game.world.height * 0.8, 'botones', function () { game.state.start('creditsState'); }, this, 5, 4);
        creditos.scale.setTo(0.2);
        creditos.anchor.setTo(0.5);
    },

    update: function () {

    }
}