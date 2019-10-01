var enemy;
var time;
var maxEnemies = 10;
var punchR;
var punchL;
var cursors;
var punchL_CD = 0;
var punchR_CD = 0;
var pressL = false;
var pressR = false;
var animR;
var animL;
var life = 3;
var score = 0;

//Un Array por cada tipo de enemigo
var enemiesType1 = new Array(maxEnemies);
var enemiesType2 = new Array(maxEnemies);

function enemy(type, id) {
    switch (type) {
        case 'type1':
            this.id = id;
            this.bounces = Math.floor(Math.random() * 4);
            this.direction = Math.floor(Math.random() * 2) + 1;
            if (this.direction == 1) {//1 si el enemigo va hacia la der; 2 si va hacia la izq
                this.initPos = -100;
                this.initDir = 1;
                this.sprite = game.add.sprite(this.initPos, 300, 'skeleton');
            } else {
                this.initPos = 900;
                this.initDir = 2;
                this.sprite = game.add.sprite(this.initPos, 300, 'skeleton');
            }
            this.speed = 100;
            this.sprite.animations.add('walkRightSkeleton', [27, 28, 29, 30, 31, 32, 33, 34, 35]);
            this.sprite.animations.add('walkLeftSkeleton', [17, 16, 15, 14, 13, 12, 11, 10, 9]);
            break;

        case 'type2':
            this.id = id;
            this.bounces = Math.floor(Math.random() * 4);
            this.direction = Math.floor(Math.random() * 2) + 1;
            if (this.direction == 1) {
                this.initPos = -100;
                this.initDir = 1;
                this.sprite = game.add.sprite(this.initPos, 300, 'link');    
            } else {
                this.initPos = 900;
                this.initDir = 2;
                this.sprite = game.add.sprite(this.initPos, 300, 'link');
            }
            this.speed = 80;
            this.sprite.scale.setTo(0.67, 0.62);
            this.sprite.animations.add('walkRightLink', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
            this.sprite.animations.add('walkLeftLink', [59, 58, 57, 56, 55, 54, 53, 52, 51]);
            break;

        default:
            console.log("Error");
            break;
    }
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
}

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

        //Controls
        cursors = this.input.keyboard.createCursorKeys();

        //Create punches and their animations
        punchL = game.add.sprite(150, 250, 'punch');
        punchR = game.add.sprite(500, 250, 'punch');

        animL = punchL.animations.add('punching');
        animR = punchR.animations.add('punching');

        animL.onComplete.add(stopAnimL, this);
        animR.onComplete.add(stopAnimR, this);

        /*
        game.physics.enable(punchL, Phaser.Physics.ARCADE);
        game.physics.enable(punchR, Phaser.Physics.ARCADE);
        */

        /*
        //Load enemy and their animations
        enemy = this.add.sprite(-100, 300, 'skeleton');

        enemy.animations.add('walkRight', [27, 28, 29, 30, 31, 32, 33, 34, 35]);

        game.physics.enable(enemy, Phaser.Physics.ARCADE);
        */
        for (var i = 0; i < maxEnemies; i++) {
            enemiesType1[i] = new enemy("type1", i);
            enemiesType2[i] = new enemy("type2", i);
            //Overlap punches
            /*
            //With enemiesType1
            game.physics.arcade.overlap(punchL, enemiesType1[i].sprite, collidePunch, null, this);
            game.physics.arcade.overlap(punchR, enemiesType1[i].sprite, collidePunch, null, this);
            //With enemiesType2
            game.physics.arcade.overlap(punchL, enemiesType2[i].sprite, collidePunch, null, this);
            game.physics.arcade.overlap(punchR, enemiesType2[i].sprite, collidePunch, null, this);
            */

        }

        //Timer to spawn enemies
        timer = game.time.create(false);

        timer.loop(2000, moveEnemy, this);

        timer.start();
        
        timer2 = game.time.create(false);

        timer2.loop(10000, xSpeed, this);

        timer2.start();
        

    },

    update: function () {
        /*
        //Set velocity and animations of enemies
        enemy.body.velocity.x = 100;

        enemy.animations.play('walkRight', 10, true);
        */
        //destroy();
        turnLeft();
        turnRight();
        activePunch();
        collidePunchL();
        collidePunchR();
        backToOrigin();
        checkEndgame();
    }
}

function spawnEnemy() {
    //Load enemy and their animations
    enemy = this.add.sprite(-100, 300, 'skeleton');

    enemy.animations.add('walkRightSkeleton', [27, 28, 29, 30, 31, 32, 33, 34, 35]);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
}

function moveEnemy() {
    let type = Math.floor(Math.random() * 2) + 1;
    switch (type) {
        case 1:
            for (var i = 0; i < maxEnemies; i++) {
                if (enemiesType1[i].sprite.body.position.x == -100) {
                    enemiesType1[i].sprite.body.velocity.x = enemiesType1[i].speed;
                    enemiesType1[i].sprite.animations.play('walkRightSkeleton', 10, true);
                    break;
                } else if (enemiesType1[i].sprite.body.position.x == 900) {
                    enemiesType1[i].sprite.body.velocity.x = -enemiesType1[i].speed;
                    enemiesType1[i].sprite.animations.play('walkLeftSkeleton', 10, true);
                    break;
                }
            }
            break;

        case 2:
            for (var i = 0; i < maxEnemies; i++) {
                if (enemiesType2[i].sprite.body.position.x == -100) {
                    enemiesType2[i].sprite.body.velocity.x = enemiesType2[i].speed;
                    enemiesType2[i].sprite.animations.play('walkRightLink', 10, true);
                    break;
                } else if (enemiesType2[i].sprite.body.position.x == 900) {
                    enemiesType2[i].sprite.body.velocity.x = -enemiesType2[i].speed;
                    enemiesType2[i].sprite.animations.play('walkLeftLink', 10, true);
                    break;
                }
            }
            break;

        default:
            console.log("Error");
            break;
    }

}

function destroy() {
    for (var i = 0; i < maxEnemies; i++) {
        if (enemiesType1[i].sprite.body.position.x >= 600) {
            enemiesType1[i].sprite.body.position.x = -100;
        }
    }
}

function turnLeft() {
    for (var i = 0; i < maxEnemies; i++) {
        if (enemiesType1[i].sprite.body.position.x >= 725 && enemiesType1[i].bounces > 0 && enemiesType1[i].direction == 1) {
            enemiesType1[i].sprite.body.velocity.x = - enemiesType1[i].speed;
            enemiesType1[i].sprite.animations.play('walkLeftSkeleton', 10, true);
            enemiesType1[i].bounces--;
            enemiesType1[i].direction = 2;
        }
        if (enemiesType2[i].sprite.body.position.x >= 725 && enemiesType2[i].bounces > 0 && enemiesType2[i].direction == 1) {
            enemiesType2[i].sprite.body.velocity.x = -enemiesType2[i].speed;
            enemiesType2[i].sprite.animations.play('walkLeftLink', 10, true);
            enemiesType2[i].bounces--;
            enemiesType2[i].direction = 2;
        }
    }
}

function turnRight() {
    for (var i = 0; i < maxEnemies; i++) {
        if (enemiesType1[i].sprite.body.position.x <= 25 && enemiesType1[i].bounces > 0 && enemiesType1[i].direction == 2) {
            enemiesType1[i].sprite.body.velocity.x = enemiesType1[i].speed;
            enemiesType1[i].sprite.animations.play('walkRightSkeleton', 10, true);
            enemiesType1[i].bounces--;
            enemiesType1[i].direction = 1;
        }
        if (enemiesType2[i].sprite.body.position.x <= 25 && enemiesType2[i].bounces > 0 && enemiesType2[i].direction == 2) {
            enemiesType2[i].sprite.body.velocity.x = enemiesType2[i].speed;
            enemiesType2[i].sprite.animations.play('walkRightLink', 10, true);
            enemiesType2[i].bounces--;
            enemiesType2[i].direction = 1;
        }
    }
}

function activePunch() {
    if (cursors.left.isDown && punchL_CD == 0) {
        animL.play('punching', 8);
        pressL = true;
        punchL_CD = 30;
    }
    if (cursors.right.isDown && punchR_CD == 0) {
        animR.play('punching', 8);
        pressR = true;
        punchR_CD = 30;
    }
    if (pressL) {
        punchL_CD--;
        if (punchL_CD == 0) {
            pressL = false;
        }

    }
    if (pressR) {
        punchR_CD--;
        if (punchR_CD == 0) {
            pressR = false;
        }
    }

}
/*
function collidePunchL() {
    //if (punchL.events.onAnimationLoop) {
        for (var i; i < maxEnemies; i++) {
            if(checkOverlap(punchL,enemiesType1[i].sprite)){
                enemiesType1[i].sprite.body.velocity.x = 0;
                enemiesType1[i].sprite.body.velocity.y = 150;
                console.log("Overlapping");
            //}
            //if(checkOverlap(punchL,enemiesType2[i].sprite)){
                enemiesType2[i].sprite.body.velocity.x = 0;
                enemiesType2[i].sprite.body.velocity.y = 150;
                console.log("Overlapping");
            //}
        }   
    }
}
*/

function checkOverlapL() {
    for (var i = 0; i < maxEnemies; i++) {
        if (enemiesType1[i].sprite.body.position.x >= 100 && enemiesType1[i].sprite.body.position.x <= 225) {
            enemiesType1[i].sprite.body.velocity.x = 0;
            enemiesType1[i].sprite.body.velocity.y = 150;
        }
        if (enemiesType2[i].sprite.body.position.x >= 100 && enemiesType2[i].sprite.body.position.x <= 225) {
            enemiesType2[i].sprite.body.velocity.x = 0;
            enemiesType2[i].sprite.body.velocity.y = 150;
        }
    }

}
function checkOverlapR() {
    for (var i = 0; i < maxEnemies; i++) {
        if (enemiesType1[i].sprite.body.position.x >= 425 && enemiesType1[i].sprite.body.position.x <= 575) {
            enemiesType1[i].sprite.body.velocity.x = 0;
            enemiesType1[i].sprite.body.velocity.y = 150;
        }
        if (enemiesType2[i].sprite.body.position.x >= 425 && enemiesType2[i].sprite.body.position.x <= 575) {
            enemiesType2[i].sprite.body.velocity.x = 0;
            enemiesType2[i].sprite.body.velocity.y = 150;
        }
    }
}

function collidePunchL() {

    if (animL.isPlaying) {
        checkOverlapL();
        console.log("Overlap");
    }
}

function collidePunchR() {
    //console.log("Overlap");
    if (animR.isPlaying) {
        checkOverlapR();
        console.log("Overlap");
    }
}

function stopAnimL() {
    animL.stop(true);
}

function stopAnimR() {
    animR.stop(true);
}

function xSpeed() {
    for (var i = 0; i < maxEnemies; i++) {
        enemiesType1[i].speed*=1.1;
        enemiesType2[i].speed*=1.1;
    }

}

function backToOrigin() {
    for (var i = 0; i < maxEnemies; i++) {
        //Para enemigos Tipo1
        if (enemiesType1[i].bounces <= 0 && enemiesType1[i].direction == 1 && enemiesType1[i].sprite.body.position.x >= 825) {
            enemiesType1[i].sprite.body.velocity.x = 0;
            enemiesType1[i].sprite.body.position.x = enemiesType1[i].initPos;
            enemiesType1[i].direction = enemiesType1[i].initDir;
            enemiesType1[i].bounces = Math.floor(Math.random() * 4);
            enemiesType1[i].sprite.animations.stop();
            life--;
        }
        if (enemiesType1[i].bounces <= 0 && enemiesType1[i].direction == 2 && enemiesType1[i].sprite.body.position.x <= -25) {
            enemiesType1[i].sprite.body.velocity.x = 0;
            enemiesType1[i].sprite.body.position.x = enemiesType1[i].initPos;
            enemiesType1[i].direction = enemiesType1[i].initDir;
            enemiesType1[i].bounces = Math.floor(Math.random() * 4);
            enemiesType1[i].sprite.animations.stop();
            life--;
        }
        if (enemiesType1[i].sprite.body.position.y >= 625) {
            enemiesType1[i].sprite.body.velocity.y = 0;
            enemiesType1[i].sprite.body.position.x = enemiesType1[i].initPos;
            enemiesType1[i].sprite.body.position.y = 300;
            enemiesType1[i].direction = enemiesType1[i].initDir;
            enemiesType1[i].bounces = Math.floor(Math.random() * 4);
            enemiesType1[i].sprite.animations.stop();
            score += 100;
        }

        //Para enemigos Tipo2
        if (enemiesType2[i].bounces <= 0 && enemiesType2[i].direction == 1 && enemiesType2[i].sprite.body.position.x >= 825) {
            enemiesType2[i].sprite.body.velocity.x = 0;
            enemiesType2[i].sprite.body.position.x = enemiesType2[i].initPos;
            enemiesType2[i].direction = enemiesType2[i].initDir;
            enemiesType2[i].bounces = Math.floor(Math.random() * 4);
            enemiesType2[i].sprite.animations.stop();
            life--;
        }
        if (enemiesType2[i].bounces <= 0 && enemiesType2[i].direction == 2 && enemiesType2[i].sprite.body.position.x <= -25) {
            enemiesType2[i].sprite.body.velocity.x = 0;
            enemiesType2[i].sprite.body.position.x = enemiesType2[i].initPos;
            enemiesType2[i].direction = enemiesType2[i].initDir;
            enemiesType2[i].bounces = Math.floor(Math.random() * 4);
            enemiesType2[i].sprite.animations.stop();
            life--;
        }
        if (enemiesType2[i].sprite.body.position.y >= 625) {
            enemiesType2[i].sprite.body.velocity.y = 0;
            enemiesType2[i].sprite.body.position.x = enemiesType2[i].initPos;
            enemiesType2[i].sprite.body.position.y = 300;
            enemiesType2[i].direction = enemiesType2[i].initDir;
            enemiesType2[i].bounces = Math.floor(Math.random() * 4);
            enemiesType2[i].sprite.animations.stop();
            score += 100;
        }
    }
}

function checkEndgame() {
    console.log("Vidas restantes: " + life);

    if(life <= 0) {
        game.state.start("endgameState");
    }
} 