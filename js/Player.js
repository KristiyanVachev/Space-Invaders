/**
 * Created by Plamen Y. Ivanov on 8/4/2016.
 */
var projectile;

    // constructor
function Player(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height, id) {
    var _this = this;
    projectile = new Projectile();

    // constructor
    (function () {
        _this.imgSrc = imageObj || null;
        _this.sourceX = sourceX || null;
        _this.sourceY = sourceY || null;
        _this.sourceWidth = sourceWidth || null;
        _this.sourceHeight = sourceHeight || null;
        _this.x = x || null;
        _this.y = y || null;
        _this.width = width || null;
        _this.height = height || null;
        _this.id = id || null;
    })();
}

Player.prototype.draw = function (ctx) {
    ctx.drawImage(this.imgSrc, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
};

Player.prototype.changePictureAndDance = function(sourceY, id, isRight, distanceToDance){
    this.id = id;
    this.sourceY = sourceY;
    if (isRight) {
        this.x += distanceToDance;    
    }
    else{
        this.x -= distanceToDance;
    }
    
    //ctx.drawImage(this.imgSrc, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
};

Player.prototype.getID = function(){
    return this.id;
};

Player.prototype.moveLeft = function (ctx) {
    if (this.id == 99 && this.x < 15) {
        return;
    }
    else{
        this.x -= 10;
        ctx.clearRect(this.x + 10, this.y, this.width, this.height);
    }
};

Player.prototype.moveRight = function (ctx) {
    if (this.id == 99 && this.x > 660) {
        return;
    }
    else{
        this.x += 10;
        ctx.clearRect(this.x - 10, this.y, this.width, this.height);
    }
};

Player.prototype.shoot = function () {
    console.log("create new projectile");
    projectile.init(this.x + (this.width / 2), this.y);
};