var enemy;
var time;

PunchemOut.gameState = function () {

}

PunchemOut.gameState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **GAME** state");
        }
    },

    preload: function () {

    },

    create: function () {
        //Draw background
        this.add.image(0, 0, 'fondo');

        //Load enemy and their animations
        enemy = this.add.sprite(-100, 300, 'skeleton');

        enemy.animations.add('walkRight', [27, 28, 29, 30, 31, 32, 33, 34, 35]);

        game.physics.enable(enemy, Phaser.Physics.ARCADE);


        //Timer to spawn enemies
        timer = game.time.create(false);

        timer.loop(2000, spawnEnemy, this);

        timer.start();

    },

    update: function () {
        //Set velocity and animations of enemies
        enemy.body.velocity.x = 100;

        enemy.animations.play('walkRight', 10, true);

    }
}

function spawnEnemy() {
    //Load enemy and their animations
    enemy = this.add.sprite(-100, 300, 'skeleton');

    enemy.animations.add('walkRight', [27, 28, 29, 30, 31, 32, 33, 34, 35]);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
}