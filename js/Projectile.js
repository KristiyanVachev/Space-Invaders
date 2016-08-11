/**
 * Created by Kristiyan Vachev on 11-Aug-16.
 */

function Projectile(startX, startY) {
    console.log("created projectile");
    var _this = this;

    // constructor
    (function () {
        _this.x = startX;
        _this.y = startY - 20;
        _this.speed = 5;

    })();
   // ctx.fillRect(this.x, this.y, 3, 15);
    console.log("start: " + this.y);
    animate(this.x, this.y, this.speed)
}

function animate(x, y, speed) {
    console.log(speed);

    //clear previous
   // ctx.clearRect(x, y + speed, 3, 15);

    ctx.fillRect(x, y, 3, 15);
    y = y - speed;

    if (y > 0) {
        window.requestAnimationFrame(animate(x, y, speed));
    }
}

