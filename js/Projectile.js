/**
 * Created by Kristiyan Vachev on 11-Aug-16.
 */

var x,
    y,
    speed = 5,
    canShoot,
    invadersArray,
    collided;

function Projectile() {
    console.log("created projectile");

    canShoot = true;
    collided = false;
}

Projectile.prototype.init = function (startX, startY, invadersArr) {

    if (canShoot) {
        canShoot = false;

        x = startX;
        y = startY - 20;
        invadersArray = invadersArr;
        animateProjectile();
    }
};

function animateProjectile() {
    ctx.clearRect(x, y + speed, 4, 15);

    ctx.fillRect(x, y, 4, 15);
    y = y - speed;

    for (var i = 0; i < invadersArray.length; i += 1) {

        if (x >= invadersArray[i].x && x <= (invadersArray[i].x + invadersArray[i].width)) {
            if (y >= invadersArray[i].y && y <= (invadersArray[i].y + invadersArray[i].height)) {
                collided = true;
                invadersArray.splice(i, 1);
            }
        }
    }

    if (y > 0 && !collided) {
        window.requestAnimationFrame(animateProjectile);
    }
    else {
        canShoot = true;
        collided = false;
    }
}

