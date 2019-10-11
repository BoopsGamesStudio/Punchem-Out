const livesL = 3;
const livesR = 3;
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
    LEFT: 100 //+ width
}

var powerUpCharge = 0;
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
var lifeL = livesL;
var lifeR = livesR;
var score = 0;
var baseEnemiesPerWave = 20;
var enemiesPerWave = baseEnemiesPerWave;
var waveNumber = 1;
var MaxSpawnTime;
var BaseSpawnTime;
var spawnTime;
var punchSound;
var combo = 0;
var maxCombo = 0;
var livesLeftL;
var livesLeftR;
var currentcombo;
var currentScore;
var spawnHeight = 10; // + centerY
var track;

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
            this.initHeight = spawnHeight;
            this.sprite = game.add.sprite(this.initPos, this.initHeight, 'skeleton');
            this.sprite.animations.add('walkRightSkeleton', [27, 28, 29, 30, 31, 32, 33, 34, 35]);
            this.sprite.animations.add('walkLeftSkeleton', [17, 16, 15, 14, 13, 12, 11, 10, 9]);
            break;

        case EnemyType.TYPE2:
            this.initHeight = spawnHeight;
            this.sprite = game.add.sprite(this.initPos, this.initHeight, 'link');
            this.sprite.scale.setTo(0.67, 0.62);
            this.sprite.animations.add('walkRightLink', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
            this.sprite.animations.add('walkLeftLink', [59, 58, 57, 56, 55, 54, 53, 52, 51]);
            break;

        case EnemyType.TYPE3:
            this.initHeight = spawnHeight;
            this.sprite = game.add.sprite(this.initPos, this.initHeight, 'spritesheet');
            this.sprite.scale.setTo(0.8, 0.62);
            this.sprite.animations.add('walkRightPrueba');
            break;
        case EnemyType.TYPE4:
            this.initHeight = spawnHeight - 30;
            this.sprite = game.add.sprite(this.initPos, this.initHeight, 'link');
            this.sprite.animations.add('walkRightLink', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
            this.sprite.animations.add('walkLeftLink', [59, 58, 57, 56, 55, 54, 53, 52, 51]);
            break;
        case EnemyType.TYPE5:
            this.initHeight = spawnHeight;
            this.sprite = game.add.sprite(this.initPos, this.initHeight, 'link');
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
        spawnHeight += game.world.centerY;
        SpawnCoordinates.LEFT += game.world.width
    },

    create: function () {
        resetVariables();

        //Different levels
        switch (level) {
            case 1:
                MaxSpawnTime = 1500;
                BaseSpawnTime = 1000;
                totalEnemyTypes = 3;
                track = game.add.audio('track1');
                break;
            case 2:
                MaxSpawnTime = 1400;
                BaseSpawnTime = 900;
                totalEnemyTypes = 4;
                track = game.add.audio('track2');
                break;
            case 3:
                MaxSpawnTime = 1300;
                BaseSpawnTime = 800;
                totalEnemyTypes = 5;
                track = game.add.audio('track3');
                break;
        }

        track.loop = true;

        spawnTime = Math.floor(Math.random() * MaxSpawnTime) + BaseSpawnTime;

        //Draw background
        var fondo = this.add.image(0, 0, 'fondo');
        fondo.height = game.world.height;
        fondo.width = game.world.width;

        game.add.text(20, 20, "LEVEL " + level);

        livesLeftL = game.add.sprite(100, 150, 'vidas');
        livesLeftL.anchor.setTo(0.5);
        livesLeftL.scale.setTo(0.2);

        livesLeftR = game.add.sprite(game.world.width - 100, 150, 'vidas', 1);
        livesLeftR.anchor.setTo(0.5);
        livesLeftR.scale.setTo(0.2);

        currentScore = game.add.text(game.world.centerX, 50, "Score: " + score);
        currentScore.anchor.setTo(0.5);

        currentcombo = game.add.text(100, game.world.height - 100, 'x' + combo);
        currentcombo.anchor.setTo(0.5);

        //Controls
        cursors = this.input.keyboard.createCursorKeys();
        cursors.left.onDown.add(activatePunch, { punchSide: 'left' });
        cursors.right.onDown.add(activatePunch, { punchSide: 'right' });

        punchButtonL = game.add.button(0, 0, null, function () { activatePunch('left'); }, this, 2, 1, 0);
        punchButtonR = game.add.button(game.world.centerX, 0, null, function () { activatePunch('right'); }, this, 2, 1, 0);

        punchButtonL.width = game.world.width / 2;
        punchButtonL.height = game.world.height;

        punchButtonR.width = game.world.width / 2;
        punchButtonR.height = game.world.height;

        powerUp = game.add.button(game.world.centerX, game.world.height - 100, 'link', function () { executePowerUp(); }, this, 2, 1, 0);
        powerUp.anchor.setTo(0.5);
        powerUp.inputEnabled = false;

        powerUpBar = game.add.image(game.world.centerX, game.world.height - 40, 'powerUpCharge');
        powerUpBar.scale.setTo(0.4, 0.5);
        powerUpBar.anchor.setTo(0.5);

        pauseButton = game.add.button(game.world.width - 50, 50, 'skeleton', function () { pauseEvent(); }, this, 2, 1, 0);
        pauseButton.anchor.setTo(0.5);

        //Create punches and their animations
        punchL = game.add.sprite(game.world.centerX - 175, game.world.centerY + 25, 'punch');
        punchL.anchor.setTo(0.5);

        punchR = game.add.sprite(game.world.centerX + 175, game.world.centerY + 25, 'punch');
        punchR.anchor.setTo(0.5);

        animL = punchL.animations.add('punching');
        animR = punchR.animations.add('punching');

        animL.onComplete.add(stopAnimL, this);
        animR.onComplete.add(stopAnimR, this);


        animL.onStart.add(checkOverlapL, this);
        animR.onStart.add(checkOverlapR, this);

        //Create text for first wave
        newWaveText = game.add.text(game.world.centerX, game.world.centerY - 100, "WAVE " + waveNumber, style3);
        newWaveText.anchor.setTo(0.5);
        newWaveText.lifespan = 2000;
        game.time.events.add(0, function () { game.add.tween(newWaveText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true); }, this);
        console.log("OLEADA " + waveNumber);

        game.time.events.add(2000, function () { track.play() }, this);

        //Create the array of enemies
        let TypeArray = [EnemyType.TYPE1, EnemyType.TYPE2, EnemyType.TYPE3, EnemyType.TYPE4, EnemyType.TYPE5];

        let index;
        let enemy;
        AllEnemies = new Array();
        for (var i = 0; i < totalEnemyTypes; i++) {
            for (var j = 0; j < maxEnemies; j++) {
                index = i * maxEnemies + j;
                //console.log(TypeArray[i] + ' ' + index);
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

        //console.log(EnemySpeed);

        loopTimer.delay = spawnTime;

        punchCD();
        checkPowerUpUsable();
        if (AllEnemies.length / maxEnemies >= 5) {
            TeleportMages();
        }
        backToOrigin();
        checkEndgame();
        if (timer.paused && !checkEnemiesAlive()) {
            waveTimer.start();
            console.log("...");
            if (waveTimer.ms >= 2000) {
                newWaveText = game.add.text(game.world.centerX, game.world.centerY - 100, "WAVE " + waveNumber, style3);
                newWaveText.anchor.setTo(0.5);
                newWaveText.lifespan = 2000;
                game.time.events.add(0, function () { game.add.tween(newWaveText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true); }, this);
                console.log("OLEADA " + waveNumber);

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

        waveNumber++;
        baseEnemiesPerWave += 10;
        enemiesPerWave = baseEnemiesPerWave;
    }
}

function activatePunch(punchSide) {
    if ((this.punchSide == 'left' || punchSide == 'left') && punchL_CD == 0) {
        animL.play('punching', 8);
        pressL = true;
        punchL_CD = 30;
    }
    if ((this.punchSide == 'right' || punchSide == 'right') && punchR_CD == 0) {
        animR.play('punching', 8);
        pressR = true;
        punchR_CD = 30;
    }
}

function punchCD() {
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
    if (enemyHittable(enemyIndex)) {
        AllEnemies[enemyIndex].hits--;

        if (AllEnemies[enemyIndex].hits == 0) {
            punchSound.play();
            AllEnemies[enemyIndex].sprite.body.velocity.x = 0;
            AllEnemies[enemyIndex].sprite.body.velocity.y = 200;

            combo++;
            giveScore(AllEnemies[enemyIndex].sprite.body.position.x);

            if (powerUpCharge < 10) {
                powerUpCharge++;
            }

            //console.log('combo : ', combo);
        }
    }
}

function checkOverlapL() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].sprite.body.position.x + 40 >= punchL.position.x - 65 && AllEnemies[i].sprite.body.position.x + 40 <= punchL.position.x + 65:
                hitEnemy(i);
                break;

        }
    }
}
function checkOverlapR() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].sprite.body.position.x + 40 >= punchR.position.x - 65 && AllEnemies[i].sprite.body.position.x + 40 <= punchR.position.x + 65:
                hitEnemy(i);
                break;

        }
    }
}
//Revisar después
function TeleportMages() {
    for (var i = maxEnemies * 4; i < maxEnemies * 5; i++) {
        switch (true) {
            case (AllEnemies[i].sprite.body.position.x >= punchL.position.x - 175 && AllEnemies[i].sprite.body.position.x <= punchL.position.x - 150) && AllEnemies[i].direction == FacingDirection.RIGHT:
                AllEnemies[i].sprite.body.position.x = game.world.centerX - 40;
                break;
            case (AllEnemies[i].sprite.body.position.x >= punchR.position.x + 125 && AllEnemies[i].sprite.body.position.x <= punchR.position.x + 150) && AllEnemies[i].direction == FacingDirection.LEFT:
                AllEnemies[i].sprite.body.position.x = game.world.centerX;
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
    AllEnemies[enemyIndex].sprite.body.position.y = AllEnemies[enemyIndex].initHeight;
    AllEnemies[enemyIndex].sprite.body.position.x = AllEnemies[enemyIndex].initPos;
    AllEnemies[enemyIndex].hits = EnemyHits[type];
    AllEnemies[enemyIndex].sprite.animations.stop();
}

function backToOrigin() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        switch (true) {
            case AllEnemies[i].direction == FacingDirection.RIGHT && AllEnemies[i].sprite.body.position.x >= game.world.width + 25:
                resetEnemy(i);
                if (combo > maxCombo)
                    maxCombo = combo;
                combo = 0;

                lifeR--;

                if (lifeR <= 0) {
                    lifeR = 0;
                    livesLeftR.destroy();
                    punchR.alpha = 0.3;
                    punchButtonR.inputEnabled = false;
                    cursors.right.enabled = false;
                } else {
                    livesLeftR.frame += 2;
                }
                break;
            case AllEnemies[i].direction == FacingDirection.LEFT && AllEnemies[i].sprite.body.position.x <= -25:
                resetEnemy(i);
                if (combo > maxCombo)
                    maxCombo = combo;
                combo = 0;

                lifeL--;

                if (lifeL <= 0) {
                    lifeL = 0;
                    livesLeftL.destroy();
                    punchL.alpha = 0.3;
                    punchButtonL.inputEnabled = false;
                    cursors.left.enabled = false;
                } else {
                    livesLeftL.frame += 2;
                }
                break;
            case AllEnemies[i].sprite.body.position.y >= game.world.height - 80:
                resetEnemy(i);
                break;

        }
    }
    currentcombo.setText("x" + combo);
}

function checkEndgame() {
    //console.log("Vidas restantes: " + life);

    if (lifeL + lifeR <= 0) {
        game.camera.fade(0x000000, 500);
        game.camera.onFadeComplete.add(function () { track.stop(); game.state.start("endgameState"); }, this);
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
    let scoreShow;

    if ((enemyPos > punchL.position.x - 55 && enemyPos < punchL.position.x - 15) || (enemyPos > punchR.position.x - 55 && enemyPos < punchR.position.x - 15)) {
        scoreToGive = 300 * combo;

        scoreShow = game.add.image(enemyPos, 200, '+300');
    } else {
        scoreToGive = 100 * combo;

        scoreShow = game.add.image(enemyPos, 200, '+100');
    }

    scoreShow.lifespan = 1500;
    game.time.events.add(500, function () { game.add.tween(scoreShow).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true); }, this);
    game.time.events.add(0, function () { game.add.tween(scoreShow).to({ y: 100 }, 1500, Phaser.Easing.Linear.None, true); }, this);

    console.log("x" + combo + " = " + scoreToGive);
    score += scoreToGive;

    currentScore.setText("Score: " + score);
    currentcombo.setText("x" + combo);
}

function enemyHittable(index) {
    return (AllEnemies[index].isAlive && AllEnemies[index].sprite.body.position.x > 25 && AllEnemies[index].sprite.body.position.x < game.world.width - 75 && AllEnemies[index].hits >= 1);
}

function executePowerUp() {
    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        if (AllEnemies[i].hits == 2) {
            AllEnemies[i].hits--;
        }

        hitEnemy(i);
    }

    powerUpCharge = 0;
}

function checkPowerUpUsable() {
    let aux = false;

    powerUpBar.scale.x = powerUpCharge / 25;

    for (var i = 0; i < totalEnemyTypes * maxEnemies; i++) {
        if (enemyHittable(i)) {
            aux = true;
            break;
        }
    }

    if (powerUpCharge >= 10 && aux) {
        powerUp.inputEnabled = true;
        powerUp.alpha = 1;
    } else {
        powerUp.inputEnabled = false;
        powerUp.alpha = 0.3;
    }
}

function pauseEvent() {
    if (!game.paused) {
        game.paused = true;

        powerUp.inputEnabled = false;
        cursors.left.enabled = false;
        punchButtonL.inputEnabled = false;
        cursors.right.enabled = false;
        punchButtonR.inputEnabled = false;

        menu = game.add.sprite(game.world.centerX, game.world.centerY, 'menuPausa');
        menu.anchor.setTo(0.5);

        tryAgain = game.add.button(game.world.centerX + 150, game.world.centerY + 150, 'skeleton', function () {
            track.stop();
            game.paused = false;
            game.state.start('gameState');
        }, this, 2, 1, 0);
        tryAgain.anchor.setTo(0.5);

        tryAgainText = game.add.text(game.world.centerX + 150, game.world.centerY + 150, "Try Again", style);
        tryAgainText.anchor.setTo(0.5);

        back = game.add.button(game.world.centerX - 150, game.world.centerY + 150, 'skeleton', function () {
            track.stop();
            game.paused = false;
            game.state.start('levelState');
        }, this, 2, 1, 0);
        back.anchor.setTo(0.5);

        backText = game.add.text(game.world.centerX - 150, game.world.centerY + 150, "Select level", style);
        backText.anchor.setTo(0.5);
    } else {
        game.paused = false;

        powerUp.inputEnabled = true;
        cursors.left.enabled = true;
        punchButtonL.inputEnabled = true;
        cursors.right.enabled = true;
        punchButtonR.inputEnabled = true;

        menu.destroy();
        tryAgain.destroy();
        tryAgainText.destroy();
        back.destroy();
        backText.destroy();
    }
}

function resetVariables() {
    powerUpCharge = 0;

    lifeL = livesL;
    lifeR = livesR;
    MaxSpawnTime = 1500;
    BaseSpawnTime = 1000;
    waveNumber = 1;

    baseEnemiesPerWave = 20;
    enemiesPerWave = baseEnemiesPerWave;
    score = 0;
    combo = 0;
    maxCombo = 0;

    EnemySpeed = [100, 80, 90, 70, 80];

    enemiesType1 = new Array(maxEnemies);
    enemiesType2 = new Array(maxEnemies);
    enemiesType3 = new Array(maxEnemies);
    enemiesType4 = new Array(maxEnemies);
    enemiesType5 = new Array(maxEnemies);
}
