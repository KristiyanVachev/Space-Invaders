/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
invadersArr = [];
var player, currEnemy, bonus, invader, currSourceY, currID, danceCounter = 1, isRight = true;

// context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
loadImages(sources, function(images) {
    player = new Player(images.spaceInvadersSpriteSheet, 8, 152, 120, 64, 350, 530, 120, 64, 99);

    ///first line
    for (var i = 0; i < 8; i++) {
        currEnemy = new Player(images.spaceInvadersSpriteSheet, 8, 8, 65, 65, i * 80 + 50, 120, 65, 65, 11);
        invadersArr.push(currEnemy);
    }
    
    ///second line
    for (var i = 0; i < 6; i++) {
        currEnemy = new Player(images.spaceInvadersSpriteSheet, 81, 8, 96, 65, i * 108 + 50, 200, 96, 65, 21);
        invadersArr.push(currEnemy);
    }

    ///thirth line
    for (var i = 0; i < 7; i++) {
        currEnemy = new Player(images.spaceInvadersSpriteSheet, 185, 8, 86, 66, i * 92 + 50, 280, 86, 66, 31);
        invadersArr.push(currEnemy);
    }

    bonus = new Player(images.spaceInvadersSpriteSheet, 144, 160, 128, 56, 150, 500, 128, 56, 69);

    for (var i = 0; i < invadersArr.length; i++) {
        invadersArr[i].draw(ctx);
    }

    //bonus.draw(ctx);
    player.draw(ctx);
});

function moveLeft() {
    player.moveLeft(ctx);
    player.draw(ctx);
}

function moveRight() {
    player.moveRight(ctx);
    player.draw(ctx);
}

function animateInvaders() {
    
    //if (invadersArr.length > 0) {
       // console.log("kop4e");
       if (isRight) {
           danceCounter++;
           if (danceCounter == 6) {
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