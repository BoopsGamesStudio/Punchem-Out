PunchemOut.socialmediaState = function () {

}

PunchemOut.socialmediaState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **SOCIAL MEDIA** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        twitter = this.add.button(game.world.width * 0.25, game.world.centerY, 'twitterLogo', function () { window.open('https://twitter.com/Boops_Games', '_blank'); });
        twitter.anchor.setTo(0.5);
        twitter.scale.setTo(game.world.height / 1000);

        instagram = this.add.button(game.world.centerX, game.world.centerY, 'instagramLogo', function () { window.open('https://www.instagram.com/boopsgamesstudio', '_blank'); });
        instagram.anchor.setTo(0.5);
        instagram.scale.setTo(game.world.height / 1500);

        youtube = this.add.button(game.world.width * 0.75, game.world.centerY, 'youtubeLogo', function () { window.open('https://www.youtube.com/channel/UCdlggk1-f6dqdhcsiB29jWA', '_blank'); });
        youtube.anchor.setTo(0.5);
        youtube.scale.setTo(game.world.height / 3000);

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { game.state.start('menuState'); });
    },

    update: function () {

    }
}