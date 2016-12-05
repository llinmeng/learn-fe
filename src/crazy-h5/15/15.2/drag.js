/**
 * Created by hh on 2016/12/1.
 */
var drag = function (target, event) {
    var startX = event.clientX;
    var startY = event.clientY;
    var origX = target.offsetLeft;
    var origY = target.offsetTop;
    var deltaX = startX - origX;
    var deltaY = startY - origY;

    //设置该元素直接捕获该事件
    target.setCapture();

    /*鼠标移动的事件处理器*/
    var moveHandler = function () {
        var evt = window.event;
        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltaY) + "px";
        /*阻止事件冒泡*/
        evt.cancelBubble = true;
    }

    /*鼠标松开的事件处理器*/
    var upHandler = function () {
        var evt = window.event;
        target.detachEvent("onlosecapture", upHandler);
        target.detachEvent("onmouseup", upHandler);
        target.detachEvent("onmousemove", upHandler);
        /*释放该对象的"事件捕获"*/
        target.releaseCapture();
        evt.cancelBubble = true;
    }

    target.attachEvent("onmousemove", moveHandler);
    target.attachEvent("onmouseup", upHandler);
    /*将失去捕获事件当成鼠标松开处理*/
    target.attachEvent("onlosecapture", upHandler);

    event.cancelBubble = true;
    /*取消事件默认行为*/
    event.returnValue = false;
}

