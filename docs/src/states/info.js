var enemy;
var i;
var text;

PunchemOut.infoState = function () {

}

PunchemOut.infoState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **INFO** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('menuState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('menuState'); });

        next = this.add.button(game.world.width * 0.54, game.world.height * 0.13, 'botones', function () { menuHit.play(); nextEnemy(enemy, 1); }, this, 15, 14)
        previous = this.add.button(game.world.width * 0.33, game.world.height * 0.13, 'botones', function () { menuHit.play(); nextEnemy(enemy, -1); }, this, 15, 14)

        enemy = new createDummy();
        i = 0;
    },

    update: function () {

    }
}

function createDummy() {
    this.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'caballero');
    this.sprite.animations.add('walkRightCaballero', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    this.sprite.animations.play('walkRightCaballero', 18, true);
    switch (Language) {
        case 'english':
            text = 'A recruit of the Knight Kingdom, he always tries his best\n to become one of the soldiers of the royar guard.\n Even though he tries his best, he is very easy to repel.\n\n\"For the king!\"';
            break;
        case 'spanish':
            text = "Recluta del Reino de los caballeros que siempre da lo mejor de sí,\n aspira a convertirse en uno de los soldados de la guardia real.\nAunque se esfuerza al máximo, es muy fácil de repeler.\n\n\"¡Por el Rey!\"";
            break;
    }
    this.description = game.add.text(game.world.width * 0.30, game.world.height * 0.35, text, styleMedium);
    this.description.anchor.setTo(0, 0.1);
}

function nextEnemy(e, num) {
    e.sprite.destroy();
    i += num;
    switch (i) {
        case 6:
            i = 0;
        case 0:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'caballero');
            e.sprite.animations.add('walkRightCaballero', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            e.sprite.animations.play('walkRightCaballero', 18, true);
            if (Language == 'english') {
                text = 'A recruit of the Knight Kingdom, he always tries his best\n to become one of the soldiers of the royar guard.\n Even though he tries his best, he is very easy to repel.\n\n\"For the king!\"';
            } else {
                text = "Recluta del Reino de los caballeros que siempre da lo mejor de sí,\n aspira a convertirse en uno de los soldados de la guardia real.\nAunque se esfuerza al máximo, es muy fácil de repeler.\n\n\"¡Por el Rey!\"";
            }
            break;
        case 1:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'mago');
            e.sprite.animations.add('walkRightMago', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            e.sprite.animations.play('walkRightMago', 18, true);
            if (Language == 'english') {
                text = 'Apprentice of the sorcery school of the Magic Kingdom, despite his lack\n of spell knowledge he fights witout fear. He does not have any armor, so\nhe is faster than knigths, but he is easy to repel.\n\n\"Knowledge will beat strenght!\"';
            } else {
                text = "Aprendiz de la escuela de hechizería del Reino Mágico, aunque todavía\nno conoce ningún hechizo va al campo de batalla sin ningún temor. Al no tener\narmadura es más rápido que un caballero, pero es muy fácil de repeler.\n\n\"¡La inteligencia superará a la fuerza!\"";
            }
            break;
        case 2:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'jineteCaballero');
            e.sprite.animations.add('walkRightKnightRider', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            e.sprite.animations.play('walkRightKnightRider', 18, true);
            if (Language == 'english') {
                text = "Horse rider from the Knight kingdom, he is a recruit who has been granted\nthe right to ride a horse, their lack of equipment makes them a very\neasy target to repel\n\n\"Charge!!\"";         
            } else {
                text = "Jinete del Reino de los caballeros, recluta al que se le ha concedido el\nderecho para cabalgar, no van muy bien equipados y son ligeros a la hora\nde derribarlos.\n\n\"¡A la carga!\"";
            }
            break;
        case 3:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'jineteMago');
            e.sprite.animations.add('walkRightMageRider', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            e.sprite.animations.play('walkRightMageRider', 18, true);
            if(Language == 'english'){
                text = 'Apprentice of the sorcery school of the Magic Kingdom, he is not very\nskilled with spells, so he has beeen asigned a horse to fight temporarily. He is faster\nthan knigth horse riders, but he is easy to repel.\n\n\"I hope I can use my magic soon!\"';
            }else{
                text = "Aprendiz de la escuela de hechizería del Reino Mágico, sus hechizos no\nson la gran cosa, así que se le ha asignado un caballo de forma provisional.\nAl no tener armadura es más rápido que un jinete caballero,\npero es muy fácil de repeler.\n\n\"¡Espero poder usar mi magia pronto!\"";
            }
            break;
        case 4:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'brujo');
            e.sprite.animations.add('walkRightBrujo', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            e.sprite.animations.play('walkRightBrujo', 18, true);
            if(Language == 'english'){
                text = 'Archmage of the Magic Kingdom, he is very skilled in with potions and alchemy.\nHe uses potions to teleport himself.\n\n\"I hope this one does not explode!\"';
            }else{
                text = "Archimago del Reino mágico especializado en el uso de pociones. Muestra su\ndestreza con la alquimia usando unas pociones teletransportadoras.\n\n\"¡Espero que esta no explote!\"";
            }
            break;
            
        case -1:
            i = 5;
        case 5:
            e.sprite = game.add.sprite(game.world.width * 0.47, game.world.height * 0.1, 'fuerte');
            e.sprite.animations.add('walkRightFuerte', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
            e.sprite.animations.play('walkRightFuerte', 12, true);
            if(Language == 'english'){
                text = 'Soldier of the vanguard of the Knight Kingdom.\nKnown for his big body and endurance. You will need more than\none hit to repel him\n\n\"Can I have another sandwich?\"';
            }else{
                text = "Soldado de la vanguardia del Reino de los caballeros.\nConocido por su gran musculatura y resistencia.\nNecesitarás más de un golpe para derribarle.\n\n\"¿Puedo comerme otro bocadillo?\"";
            }
            break;

    }

    e.description.text = text;
}