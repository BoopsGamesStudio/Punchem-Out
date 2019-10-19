PunchemOut.creditsState = function () {

}

var texts;

PunchemOut.creditsState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **CREDITS** state");
        }
    },

    preload: function () {

    },

    create: function () {
        switch (Language) {
            case 'spanish':
                texts = ["ARTE\n", "PROGRAMACIÓN\n", "DISEÑO\n", "MÚSICA Y SONIDO\n"];
                break;
            case 'english':
                texts = ["ART\n", "PROGRAMMING\n", "DESIGN\n", "MUSIC AND SOUND\n"];
                break;
        }

        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        //Artistas
        artistasTitle = game.add.text(game.world.width * 0.3, game.world.height * 0.2, texts[0], styleSmall);
        artistasTitle.anchor.setTo(0.5);
        artistasTitle.fontSize = game.world.height * 0.04;

        artistas = game.add.text(artistasTitle.centerX, artistasTitle.centerY + 10, "Gabriel Muñoz Borchers\nCarlos Ventura Padina González", styleSmall);
        artistas.anchor.setTo(0.5, 0);
        artistas.fontSize = artistasTitle.fontSize * 0.8;

        //Programadores
        programadoresTitle = game.add.text(game.world.width * 0.7, game.world.height * 0.2, texts[1], styleSmall);
        programadoresTitle.anchor.setTo(0.5);
        programadoresTitle.fontSize = game.world.height * 0.04;

        programadores = game.add.text(programadoresTitle.centerX, programadoresTitle.centerY + 10, "Alejandro Hernández Pérez\nMario Márquez Balduque\nDiego Sagredo de Miguel", styleSmall);
        programadores.anchor.setTo(0.5, 0);
        programadores.fontSize = programadoresTitle.fontSize * 0.8;

        //Diseño
        diseñoTitle = game.add.text(game.world.width * 0.3, game.world.height * 0.6, texts[2], styleSmall);
        diseñoTitle.anchor.setTo(0.5);
        diseñoTitle.fontSize = game.world.height * 0.04;

        diseño = game.add.text(diseñoTitle.centerX, diseñoTitle.centerY + 10, "Carlos Ventura Padina González", styleSmall);
        diseño.anchor.setTo(0.5, 0);
        diseño.fontSize = diseñoTitle.fontSize * 0.8;

        //Sonido
        sonidoTitle = game.add.text(game.world.width * 0.7, game.world.height * 0.6, texts[3], styleSmall);
        sonidoTitle.anchor.setTo(0.5);
        sonidoTitle.fontSize = game.world.height * 0.04;

        sonido = game.add.text(sonidoTitle.centerX, sonidoTitle.centerY + 10, "Mikel Dale", styleSmall);
        sonido.anchor.setTo(0.5, 0);
        sonido.fontSize = sonidoTitle.fontSize * 0.8;

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('menuState'); });
    },

    update: function () {

    }
}