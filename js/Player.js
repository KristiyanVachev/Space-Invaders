/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */
function Player(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height) {
    var _this = this;

    // constructor
    (function() {
        _this.imgSrc = imageObj || null;
        _this.sourceX = sourceX || null;
        _this.sourceY = sourceY || null;
        _this.sourceWidth = sourceWidth || null;
        _this.sourceHeight = sourceHeight || null;
        _this.x = x || null;
        _this.y = y || null;
        _this.width = width || null;
        _this.height = height || null;

    })();
}

Player.prototype.draw = function (ctx) {
    ctx.drawImage(this.imgSrc, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
};

Player.prototype.moveLeft = function () {
    this.x -= 2;
};

Player.prototype.moveRight = function () {
    this.x += 2;
};