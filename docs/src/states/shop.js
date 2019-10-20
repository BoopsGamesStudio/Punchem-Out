PunchemOut.shopState = function () {

}

PunchemOut.shopState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **SHOP** state");
        }
    },

    preload: function () {

    },

    create: function () {
        var LanguageSprite = 0;
        if (Language == 'english')
            LanguageSprite = 2;

        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        switch (Language) {
            case 'spanish':
                bought = this.add.text(game.world.centerX, game.world.height * 0.7, "Compra realizada con exito!", styleSmall);
                break;
            case 'english':
                bought = this.add.text(game.world.centerX, game.world.height * 0.7, "Succesful purchase!", styleSmall);
                break;
        }
        
        bought.anchor.setTo(0.5);
        bought.fontSize = game.world.height * 0.04;
        bought.alpha = 0;

        comprarVida = this.add.button(game.world.width * 0.3, game.world.height * 0.4, 'shop', function () {
            bought.alpha = 1;
            game.add.tween(bought).to({ alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 1000);
        }, this, 0, 0);
        comprarVida.anchor.setTo(0.5);

        comprarVidaText = this.add.image(comprarVida.centerX, comprarVida.centerY + 100, 'shop', 2 + LanguageSprite);
        comprarVidaText.scale.setTo(0.7);
        comprarVidaText.anchor.setTo(0.5);

        comprarLevelPack = this.add.button(game.world.width * 0.7, game.world.height * 0.4, 'shop', function () {
            bought.alpha = 1;
            game.add.tween(bought).to({ alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 1000);
        }, this, 1, 1);
        comprarLevelPack.anchor.setTo(0.5);

        comprarLevelPackText = this.add.image(comprarLevelPack.centerX, comprarLevelPack.centerY + 100, 'shop', 3 + LanguageSprite);
        comprarLevelPackText.scale.setTo(0.7);
        comprarLevelPackText.anchor.setTo(0.5);

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('menuState'); });
    },

    update: function () {

    }
}