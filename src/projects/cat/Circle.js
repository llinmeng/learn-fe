Circle.TYPE_UNSELECTED = 1;
Circle.TYPE_SELECTED = 2;
Circle.TYPE_CAT = 3;

function Circle() {
    createjs.Shape.call(this);
    this.setCircleType = function (type) {
        this._circleType = type;                    //把传进来的参数设置为当前变量
        switch (type){
            case Circle.TYPE_UNSELECTED:
                this.setColor("#cccccc");           //空白
                break;
            case Circle.TYPE_SELECTED:
                this.setColor("#ff6600");           //点击
                break;
            case Circle.TYPE_CAT:
                this.setColor("#0000ff");           //猫
                break;
        }
    }
    
    
    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0, 0, 25);
        this.graphics.endFill();
    }
    
    this.getCircleType = function () {
        return this._circleType;
    }
    this.setCircleType(1);
}

Circle.prototype = new createjs.Shape();

Circle.TYPE_UNSELECTED = 1;
Circle.TYPE_SELECTED = 2;
Circle.TYPE_CAT = 3;