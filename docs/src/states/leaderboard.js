PunchemOut.leaderboardState = function () {

}

PunchemOut.leaderboardState.prototype = {

    init: function () {

        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **LEADERBOARD** state");
        }
    },

    preload: function () {

    },

    create: function () {
        fondoMenu = this.add.image(0, 0, 'menuFondo');
        fondoMenu.height = game.world.height;
        fondoMenu.width = game.world.width;

        leaderBoard = game.add.text(game.world.centerX, game.world.height * 0.1, "TOP PUNTUACIONES [NIVEL " + level + "]:\n", styleBig);
        leaderBoard.fontSize = game.world.height/30;
        leaderBoard.lineSpacing = game.world.height/50;
    
        switch (level) {
            case 1:
                for (var i = scoreLength - 1; i >= 0; i--) {
                    if (scoreLvl1[i] == 0) leaderBoard.setText(leaderBoard.text + "-\n");
                    else leaderBoard.setText(leaderBoard.text + scoreLvl1[i] + "\n");
                }
                break;
            case 2:
                for (var i = scoreLength - 1; i >= 0; i--) {
                    if (scoreLvl2[i] == 0) leaderBoard.setText(leaderBoard.text + "-\n");
                    else leaderBoard.setText(leaderBoard.text + scoreLvl2[i] + "\n");
                }
                break;
            case 3:
                for (var i = scoreLength - 1; i >= 0; i--) {
                    if (scoreLvl3[i] == 0) leaderBoard.setText(leaderBoard.text + "-\n");
                    else leaderBoard.setText(leaderBoard.text + scoreLvl3[i] + "\n");
                }
                break;
        }
        leaderBoard.anchor.setTo(0.5, 0);
        leaderBoard.align = 'center';
        
        leaderBoardCell = game.add.sprite(leaderBoard.x, leaderBoard.y + leaderBoard.lineSpacing + leaderBoard.fontSize, 'scoreFrame');
        leaderBoardCell.anchor.setTo(0.5, 0);
        leaderBoardCell.height = leaderBoard.height * 0.83;
        leaderBoardCell.width = game.world.height * 0.3;
        
        back = this.add.button(game.world.width * 0.13, game.world.height * 0.87, 'botones', function () { menuHit.play(); game.state.start('levelState'); }, this, 15, 14);
        back.anchor.setTo(0.3, 1);
        back.scale.setTo(game.world.height / 700);

        escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(function () { menuHit.play(); game.state.start('levelState'); });
    },

    update: function () {

    }
}