/**
 * Created by Kristiyan Vachev on 11-Aug-16.
 */

function Projectile(startX, startY) {
    var _this = this;

    // constructor
    (function () {
        _this.x = startX;
        _this.y = startY;
        _this.speed = 5;

    })();

    console.log("created projectile");
    animate();

    
}



function animate() {
    console.log('projectile shooted');
    //clear previous
    ctx.clearRect(this.x, this.y + this.speed, 3, 15);

    ctx.fillRect(this.x, this.y, 3, 15);
    this.y -= this.speed;

    window.requestAnimationFrame(animate);
}

