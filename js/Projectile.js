/**
 * Created by Kristiyan Vachev on 11-Aug-16.
 */

var x,
    y,
    speed = 5,
    canShoot;

function Projectile() {
    console.log("created projectile");
    var _this = this;
    canShoot = true;

    // constructor
    (function () {
        _this.x = null;
        _this.y = null;

    })();

    console.log("start: " + this.y);

}

Projectile.prototype.init = function(startX, startY) {

    if(canShoot){
        canShoot = false;

        x = startX;
        y = startY;
        animateProjectile();
    }
};


function animateProjectile() {
    console.log(x, y, speed);
    //clear previous
    ctx.clearRect(x, y + speed, 3, 15);

    ctx.fillRect(x, y, 3, 15);
    y = y - speed;

    if (y > 0) {
        window.requestAnimationFrame(animateProjectile);
    }
    else{
        canShoot = true;
    }


}

