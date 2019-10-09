const lives = 5;
const maxEnemies = 10;
//Esto porque hasta el nivel no sabes cuantos usas
var totalEnemyTypes;


const FacingDirection = {
    RIGHT: 1,
    LEFT: 2
};

const EnemyType = {
    TYPE1: 'Skeleton',
    TYPE2: 'Link',
    TYPE3: 'Prueba',
    TYPE4: 'Giant',
    TYPE5: 'Mage'
}

const SpawnCoordinates = {
    RIGHT: -100,
    LEFT: 900
}

var time;
var punchR;
var punchL;
var cursors;
var punchL_CD = 0;
var punchR_CD = 0;
var pressL = false;
var pressR = false;
var animR;
var animL;
var life = lives;
var score = 0;
var baseEnemiesPerWave = 20;
var enemiesPerWave = baseEnemiesPerWave;
var MaxSpawnTime;
var BaseSpawnTime;
var spawnTime;
var punchSound;
var combo = 0;
var maxCombo = 0;
var livesLeft;
var currentcombo;
var currentScore;

var EnemySpeed = [100, 80, 90, 70, 80];
const EnemyHits = [1, 1, 1, 2, 1];
var EnemyAnimations = [{ RIGHT: 'walkRightSkeleton', LEFT: 'walkLeftSkeleton' },
{ RIGHT: 'walkRightLink', LEFT: 'walkLeftLink' },
{ RIGHT: 'walkRightPrueba', LEFT: 'walkRightPrueba' },
{ RIGHT: 'walkRightLink', LEFT: 'walkLeftLink' },
{ RIGHT: 'walkRightLink', LEFT: 'walkLeftLink' }]

//Un Array por cada tipo de enemigo
var AllEnemies;

function CreateEnemy(type) {
    this.hits;
    this.direction = Math.floor(Math.random() * 2) + 1;
    this.isAlive = false;
    switch (this.direction) {
        case FacingDirection.RIGHT:
            this.initPos = SpawnCoordinates.RIGHT;
            break;
        case FacingDirection.LEFT:
            this.initPos = SpawnCoordinates.LEFT;
            break;
    }

    switch (type) {
        case EnemyType.TYPE1:
            this.sprite = game.add.sprite(this.initPos, 300, 'skeleton');
            this.sprite.animations.add('walkRightSkeleton', [27, 28, 29, 30, 31, 32, 33, 34, 35]);
            this.sprite.animations.add('walkLeftSkeleton', [17, 16, 15, 14, 13, 12, 11, 10, 9]);
            break;

        case EnemyType.TYPE2:
            this.sprite = game.add.sprite(this.initPos, 300, 'link');
            this.sprite.scale.setTo(0.67, 0.62);
            this.sprite.animations.add('walkRightLink', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
            this.sprite.animations.add('walkLeftLink', [59, 58, 57, 56, 55, 54, 53, 52, 51]);
            break;

        case EnemyType.TYPE3:
            this.sprite = game.add.sprite(this.initPos, 300, 'spritesheet');
            this.sprite.scale.setTo(0.8, 0.62);
            this.sprite.animations.add('walkRightPrueba');
            break;
        case EnemyType.TYPE4:
            this.sprite = game.add.sprite(this.initPos, 260, 'link');
            this.sprite.animations.add('walkRightLink', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
            this.sprite.animations.add('walkLeftLink', [59, 58, 57, 56, 55, 54, 53, 52, 51]);
            break;
        case EnemyType.TYPE5:
            this.sprite = game.add.sprite(this.initPos, 300, 'link');
            this.sprite.tint = 0x960585;
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
            console.log("[DEBUG] Entering **GAME** state. LEVEL " + level);
        }
    },

    preload: function () {

    },

    create: function () {
        //Different levels
        switch (level) {
            case 1:
                MaxSpawnTime = 1500;
                BaseSpawnTime = 1000;
                totalEnemyTypes = 3;
                break;
            case 2:
                MaxSpawnTime = 1400;
                BaseSpawnTime = 900;
                totalEnemyTypes = 4;
                break;
            case 3:
                MaxSpawnTime = 1300;
                BaseSpawnTime = 800;
                totalEnemyTypes = 5;
                break;
        }

        spawnTime = Math.floor(Math.random() * MaxSpawnTime) + BaseSpawnTime;

        //Draw background
        var fondo = this.add.image(0, 0, 'fondo');
        fondo.scale.setTo(0.3, 0.3);

        game.add.text(20, 20, "LEVEL " + level);

        livesLeft = game.add.text(300, 100, "Lives left: " + life);
        currentScore = game.add.text(300, 50, "Score: " + score);
        currentcombo = game.add.text(100, 500, 'x' + combo);

        //Controls
        cursors = this.input.keyboard.createCursorKeys();

        //Create punches and their animations
        punchL = game.add.sprite(150, 250, 'punch');
        punchR = game.add.sprite(500, 250, 'punch');

        animL = punchL.animations.add('punching');
        animR = punchR.animations.add('punching');

        animL.onComplete.add(stopAnimL, this);
        animR.onComplete.add(stopAnimR, this);

        animL.onStart.add(checkOverlapL, this);
        animR.onStart.add(checkOverlapR, this);

        //Create the array of enemies
        let TypeArray = [EnemyType.TYPE1, EnemyType.TYPE2, EnemyType.TYPE3, EnemyType.TYPE4, EnemyType.TYPE5];

        let index;
        let enemy;
        AllEnemies = new Array();
        for (var i = 0; i < totalEnemyTypes; i++) {
            for (var j = 0; j < maxEnemies; j++) {
                index = i * maxEnemies + j;
                console.log(TypeArray[i] + ' ' + index);
                enemy = new CreateEnemy(TypeArray[i]);
                AllEnemies.push(enemy);
            }
        }

        punchSound = game.add.audio('punch');

        //Timer to spawn enemies
        timer = game.time.create(false);

        loopTimer = timer.loop(spawnTime, moveEnemy, this);

        timer.start();

        waveTimer = game.time.create(false);

    },

    update: function () {
        loopTimer.delay = spawnTime;

        activePunch();
        if (AllEnemies.length / maxEnemies >= 5) {
            TeleportMages();
        }
        backToOrigin();
        checkEndgame();
        if (timer.paused && !checkEnemiesAlive()) {
            waveTimer.start();
            console.log("...");
            if (waveTimer.ms >= 2000) {
                console.log("NUEVA OLEADA");
                timer.resume();
                waveTimer.stop();
            }
        }
    }
}

function moveEnemy() {
    if (enemiesPerWave > 0) {
        let type = Math.floor(Math.random() * totalEnemyTypes);
        let created = false;
        let index;
        for (var i = 0; i < maxEnemies; i++) {
            index = type * maxEnemies + i;
            switch (true) {
                case AllEnemies[index].sprite.position.x == SpawnCoordinates.RIGHT:
                case AllEnemies[index].sprite.position.x == SpawnCoordinates.LEFT:
                    AllEnemies[index].isAlive = true;
                    AllEnemies[index].hits = EnemyHits[type];


                    switch (AllEnemies[index].direction) {
                        case FacingDirection.RIGHT:
                            AllEnemies[index].sprite.body.velocity.x = EnemySpeed[type];
                            AllEnemies[index].sprite.animations.play(EnemyAnimations[type].RIGHT, 10, true);
                            break;
                        case FacingDirection.LEFT:
                            AllEnemies[index].sprite.body.velocity.x = -EnemySpeed[type];
                            AllEnemies[index].sprite.animations.play(EnemyAnimations[type].LEFT, 10, true);
                            break;
                        default:
                            console.log('Error en el switch direction')
                            break;
                    }
                    enemiesPerWave--;
                    spawnTime = Math.floor(Math.random() * MaxSpawnTime) + BaseSpawnTime;
                    console.log(enemiesPerWave);
                    created = true;
                    break;
            }
            if (created)
                break;
        }
    } else {
        timer.pause();

        switch (level) {
            case 1:
                xSpeed(1.1);
                decSpawnTime(0.9);
                break;
            case 2:
                xSpeed(1.2);
                decSpawnTime(0.8);
                break;
            case 3:
                xSpeed(1.3);
                decSpawnTime(0.7);
                break;
        }

        baseEnemiesPerWave += 10;
        enemiesPerWave = baseEnemiesPerWave;
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

function hitEnemy(enemyIndex) {

    AllEnemies[enemyIndex].hits--;

    if (AllEnemies[enemyIndex].hits == 0) {
        punchSound.play();
        AllEnemies[enemyIndex].sprite.body.velocity.x = 0;
        AllEnemies[enemyIndex].sprite.body.velocity.y = 200;

        combo++;
        giveScore(AllEnemies[enemyIndex].sprite.body.position.x);

        //console.log('combo : ', combo);
    }
}

function checkOverlapL() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].sprite.body.position.x >= 120 && AllEnemies[i].sprite.body.position.x <= 250:
                hitEnemy(i);
                break;

        }
    }
}
function checkOverlapR() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].sprite.body.position.x >= 470 && AllEnemies[i].sprite.body.position.x <= 600:
                hitEnemy(i);
                break;

        }
    }
}
//Revisar después
function TeleportMages() {
    for (var i = maxEnemies * 4; i < maxEnemies * 5; i++) {
        switch (true) {
            case (AllEnemies[i].sprite.body.position.x >= 50 && AllEnemies[i].sprite.body.position.x <= 75) && AllEnemies[i].direction == FacingDirection.RIGHT:
                AllEnemies[i].sprite.body.position.x = 300;
                break;
            case (AllEnemies[i].sprite.body.position.x >= 675 && AllEnemies[i].sprite.body.position.x <= 700) && AllEnemies[i].direction == FacingDirection.LEFT:
                AllEnemies[i].sprite.body.position.x = 350;
                break;
        }
    }
}

function stopAnimL() {
    animL.stop(true);
}

function stopAnimR() {
    animR.stop(true);
}

function xSpeed(SpeedIncrement) {
    for (var i = 0; i < totalEnemyTypes; i++)
        EnemySpeed[i] *= SpeedIncrement;
}

function resetEnemy(enemyIndex) {
    let type = Math.floor(enemyIndex / maxEnemies);
    AllEnemies[enemyIndex].isAlive = false;
    AllEnemies[enemyIndex].sprite.body.velocity.x = 0;
    AllEnemies[enemyIndex].sprite.body.velocity.y = 0;
    AllEnemies[enemyIndex].sprite.body.position.y = 300;
    AllEnemies[enemyIndex].sprite.body.position.x = AllEnemies[enemyIndex].initPos;
    AllEnemies[enemyIndex].hits = EnemyHits[type];
    AllEnemies[enemyIndex].sprite.animations.stop();
}

function backToOrigin() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].direction == FacingDirection.RIGHT && AllEnemies[i].sprite.body.position.x >= 825:
            case AllEnemies[i].direction == FacingDirection.LEFT && AllEnemies[i].sprite.body.position.x <= -25:
                resetEnemy(i);
                if (combo > maxCombo)
                    maxCombo = combo;
                combo = 0;
                life--;
                break;
            case AllEnemies[i].sprite.body.position.y >= 625:
                resetEnemy(i);
                break;

        }
    }
    currentcombo.setText("x" + combo);
    livesLeft.setText("Lives left: " + life);
}

function checkEndgame() {
    //console.log("Vidas restantes: " + life);

    if (life <= 0) {
        game.camera.fade(0x000000, 500);
        game.camera.onFadeComplete.add(function () { game.state.start("endgameState"); }, this);
    }
}

function decSpawnTime(decreaseInSpawn) {
    MaxSpawnTime *= decreaseInSpawn;
    BaseSpawnTime *= decreaseInSpawn;
    console.log(MaxSpawnTime);
    console.log(BaseSpawnTime);
}

function checkEnemiesAlive() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        if (AllEnemies[i].isAlive)
            return true;
    }

    return false;
}

function giveScore(enemyPos) {
    if ((enemyPos > 170 && enemyPos < 210) || (enemyPos > 520 && enemyPos < 560)) {
        scoreToGive = 300 * combo;

        textScore = game.add.text(enemyPos, 200, "+300", style2);
    } else {
        scoreToGive = 100 * combo;

        textScore = game.add.text(enemyPos, 200, "+100", style2);
    }

    textScore.lifespan = 1500;
    game.time.events.add(500, function () { game.add.tween(textScore).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true); }, this);
    game.time.events.add(0, function () { game.add.tween(textScore).to({ y: 100 }, 1500, Phaser.Easing.Linear.None, true); }, this);

    console.log("x" + combo + " = " + scoreToGive);
    score += scoreToGive;

    currentScore.setText("Score: " + score);
    currentcombo.setText("x" + combo);
}