/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */

/*
 ***KeyCodes***
 *\\\\\\\\\\\
 * Player 1
 *
 * A - 65
 * S - 83
 * D - 68
 * W - 87
 * Space - 32
 *
 *\\\\\\\\\\\
 *
 *\\\\\\\\\\\
 * Player 2
 *
 * LArrow - 37
 * RArrow - 39
 * DArrow - 40
 * UArrow - 38
 * Dot - 190
 *
 *\\\\\\\\\\\
 ***KeyCodes***
 */
var keys = {};

$(document).keydown(function (e) {
    keys[e.which] = true;
    if(e.which == 65){
        console.log("Moving Left");
        requestAnimationFrame(moveLeft);
    }
    if(e.which == 68){
        console.log("Moving Right");
        requestAnimationFrame(moveRight);
    }
    if(e.which == 32){
        console.log("Player 1 Shoots!");
        requestAnimationFrame(shoot);

    }
});

$(document).keyup(function (e) {
    delete keys[e.which];
});
