PunchemOut.menuState = function () {

}

var styleSmall = { font: "20px Arial", fill: "#ffffff", align: "center" };
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
var menuHit;
var Language = 'english';

PunchemOut.menuState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **MENU** state");
        }
    },

    preload: function () {

    },

    create: function () {
        menuHit = game.add.audio('menuhit',0.5);

        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        logo = this.add.image(game.world.centerX, game.world.height * 0.2, 'logo_juego');
        logo.scale.setTo(game.world.height / 1000);
        logo.anchor.setTo(0.5);

        var LanguageSprite = 0;
        if(Language == 'english')
            LanguageSprite = 6;

        contacto = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'logo', function () { menuHit.play(); game.state.start('socialmediaState'); });
        contacto.scale.setTo(game.world.height / 3000);
        contacto.anchor.setTo(0, 1);

        settings = this.add.button(game.world.width * 0.87, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('settingsState'); }, this, 13, 12);
        settings.anchor.setTo(0.7, 1);
        settings.scale.setTo(game.world.height / 700);

        jugar = this.add.button(game.world.centerX, game.world.centerY, 'botones', function () { menuHit.play(); game.state.start('levelState'); }, this, 1 + LanguageSprite, 0 + LanguageSprite);
        jugar.scale.setTo(game.world.height / 650);
        jugar.anchor.setTo(0.5);

        shop = this.add.button(game.world.centerX, game.world.height * 0.65, 'botones', function () { menuHit.play(); game.state.start('shopState'); }, this, 3 + LanguageSprite, 2 + LanguageSprite);
        shop.scale.setTo(game.world.height / 650);
        shop.anchor.setTo(0.5);

        creditos = this.add.button(game.world.centerX, game.world.height * 0.8, 'botones', function () { menuHit.play(); game.state.start('creditsState'); }, this, 5 + LanguageSprite, 4 + LanguageSprite);
        creditos.scale.setTo(game.world.height / 650);
        creditos.anchor.setTo(0.5);

        info = this.add.button(game.world.width * 0.83, game.world.height * 0.5, 'info', function () { menuHit.play(); game.state.start('infoState'); }, this, 5 + LanguageSprite, 4 + LanguageSprite);
        info.anchor.setTo(0.5);
        info.scale.setTo(game.world.height / 5000);

        console.log('Current language is:' + Language);
    },

    update: function () {

    }
}
