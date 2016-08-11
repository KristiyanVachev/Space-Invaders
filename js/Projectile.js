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
    var _this = this;

    canShoot = true;
    collided = false;

    // constructor
    (function () {
        _this.x = null;
        _this.y = null;

    })();

}

Projectile.prototype.init = function (startX, startY, invadersArr) {

    if (canShoot) {
        canShoot = false;

        x = startX;
        y = startY;
        invadersArray = invadersArr;
        animateProjectile();
    }
};


function animateProjectile() {
    //clear previous
    ctx.clearRect(x, y + speed, 3, 15);

    ctx.fillRect(x, y, 3, 15);
    y = y - speed;

    for (var i = 0; i < invadersArray.length; i += 1) {
        //check if the it hits
        console.log(invadersArray.length);

        if (x >= invadersArray[i].x && x <= (invadersArray[i].x + invadersArray[i].width)) {
            if (y >= invadersArray[i].y && y <= (invadersArray[i].y + invadersArray[i].height)) {
                collided = true;

                invadersArray.splice(i, 1);
            }

        }

        //if it does, remove element from array
    }

    if (y > 0 && !collided) {
        window.requestAnimationFrame(animateProjectile);
    }
    else {
        canShoot = true;
        collided = false;
    }


}

