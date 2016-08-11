/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var player;

// context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
loadImages(sources, function(images) {
    player = new Player(images.spaceInvadersSpriteSheet, 0, 160, 122, 66, 350, 500, 122, 66);
    player.draw(ctx);
});

function moveLeft(){
    ctx.clearRect(0,0,800,600);
    player.moveLeft();
    player.draw(ctx);
}

function moveRight(){
    ctx.clearRect(0,0,800,600);
    player.moveRight();
    player.draw(ctx);
}