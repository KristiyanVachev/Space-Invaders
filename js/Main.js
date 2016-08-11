/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
invadersArr = [];
var player, enemy1state1, enemy1state2, enemy2state1, enemy2state2, enemy3state1, enemy3state2, bonus, invader, currSourceY, currID, danceCounter = 1, isRight = true;

// context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
loadImages(sources, function(images) {
    player = new Player(images.spaceInvadersSpriteSheet, 8, 152, 120, 64, 350, 500, 120, 64, 99);
    enemy1state1 = new Player(images.spaceInvadersSpriteSheet, 8, 8, 65, 65, 350, 120, 65, 65, 11);
    enemy1state2 = new Player(images.spaceInvadersSpriteSheet, 8, 81, 65, 65, 280, 120, 65, 65, 12);
    enemy2state1 = new Player(images.spaceInvadersSpriteSheet, 81, 8, 96, 65, 120, 120, 96, 65, 21);
    enemy2state2 = new Player(images.spaceInvadersSpriteSheet, 81, 81, 96, 65, 420, 120, 96, 65, 22);
    enemy3state1 = new Player(images.spaceInvadersSpriteSheet, 185, 8, 86, 66, 400, 221, 86, 66, 31);
    enemy3state2 = new Player(images.spaceInvadersSpriteSheet, 185, 82, 86, 66, 300, 220, 86, 66, 32);
    bonus = new Player(images.spaceInvadersSpriteSheet, 144, 160, 128, 56, 150, 500, 128, 56, 69);

    invadersArr.push(enemy1state1);
    invadersArr.push(enemy1state2);
    invadersArr.push(enemy2state1);
    invadersArr.push(enemy2state2);
    invadersArr.push(enemy3state1);
    invadersArr.push(enemy3state2);

    enemy1state1.draw(ctx);
    enemy1state2.draw(ctx);
    enemy2state1.draw(ctx);
    enemy2state2.draw(ctx);
    enemy3state1.draw(ctx);
    enemy3state2.draw(ctx);
    //bonus.draw(ctx);
    player.draw(ctx);
});

function moveLeft() {
    ctx.clearRect(0, 0, 800, 600);
    player.moveLeft();
    for (var i = 0; i < invadersArr.length; i++) {
        var element = invadersArr[i];
        element.draw(ctx);
    }
    player.draw(ctx);
}

function moveRight() {
    ctx.clearRect(0, 0, 800, 600);
    player.moveRight();
    for (var i = 0; i < invadersArr.length; i++) {
        var element = invadersArr[i];
        element.draw(ctx);
    }
    player.draw(ctx);
}

function animateInvaders() {
    
    //if (invadersArr.length > 0) {
       // console.log("kop4e");
       if (isRight) {
           danceCounter++;
           if (danceCounter == 10) {
               isRight = false;
           }
       }
       else{
           danceCounter--;
           if (danceCounter == 1) {
               isRight = true;
           }
       }
        setTimeout(function() {
            for (var i = 0; i < invadersArr.length; i++) {
                invader = invadersArr[i];
                if (invader.getID() === 11) {
                    currSourceY = 81;
                    currID = 12;
                }
                else if(invader.getID() === 12){
                    currSourceY = 8;
                    currID = 11;
                }
                else if(invader.getID() === 21){
                    currSourceY = 81;
                    currID = 22;
                }
                else if(invader.getID() === 22){
                    currSourceY = 8;
                    currID = 21;
                }
                else if(invader.getID() === 31){
                    currSourceY = 82;
                    currID = 32;
                }
                else if(invader.getID() === 32){
                    currSourceY = 8;
                    currID = 31;
                }
                //Player.prototype.changePictureAndDance = function(sourceY, id, isRight, distanceToDance){
                invader.changePictureAndDance(currSourceY, currID, isRight, 25);
            }
            ctx.clearRect(0, 0, 800, 600);
            for (var i = 0; i < invadersArr.length; i++) {
                invader = invadersArr[i];
                invader.draw(ctx);
            }
            player.draw(ctx);
            animateInvaders();
        }, 250);
}

animateInvaders();

function shoot(){
    player.shoot();
}