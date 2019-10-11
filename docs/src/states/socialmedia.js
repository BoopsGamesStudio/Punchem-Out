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

        twitter = this.add.button(game.world.centerX - 200, game.world.centerY, 'twitterLogo', function () { window.location.href = "https://twitter.com/Boops_Games"; });
        twitter.anchor.setTo(0.5);
        twitter.scale.setTo(0.06);

        instagram = this.add.button(game.world.centerX, game.world.centerY, 'instagramLogo', function () { window.location.href = "https://www.instagram.com/boopsgamesstudio"; });
        instagram.anchor.setTo(0.5);
        instagram.scale.setTo(0.02);
        
        youtube = this.add.button(game.world.centerX + 200, game.world.centerY, 'youtubeLogo', function () { window.location.href = "https://www.youtube.com/channel/UCdlggk1-f6dqdhcsiB29jWA"; });
        youtube.anchor.setTo(0.5);
        youtube.scale.setTo(0.2);

        back = this.add.button(150, game.world.height - 100, 'botones', function () { game.state.start('menuState'); }, this, 9, 8);
        back.scale.setTo(0.2);
        back.anchor.setTo(0.5);
    },

    update: function () {

    }
}