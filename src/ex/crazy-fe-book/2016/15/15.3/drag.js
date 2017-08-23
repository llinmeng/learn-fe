/**
 * Created by hh on 2016/12/1.
 */
var drag = function (target, event) {
    /*定义开始拖动时的鼠标位置(相对于window坐标)*/
    var startX = event.clientX;
    var startY = event.clientY;
    /*定义将要被拖动元素的位置(相对于document坐标)*/
    var origX = target.offsetLeft;
    var origY = target.offsetTop;
    /*计算windows坐标系和document坐标系之间的偏移*/
    var deltaX = startX - origX;
    var deltaY = startY - origY;

    /*鼠标松开的事件处理器*/
    var upHandler = function (evt) {
        /*对于IE事件模型, 获取事件对象*/
        if (!evt) evt = window.event;
        if (document.removeEventListener) {
            /*DOM事件模型*/
            /*取消在事件捕获阶段的事件处理器*/
            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);
        } else if (document.detachEvent){
            target.detachEvent("onlosecapture", upHandler);
            target.detachEvent("onmouseup", upHandler);
            target.detachEvent("onmousemove", upHandler);
            /*释放该对象的"事件捕获"*/
            target.releaseCapture();
        }
        /*阻止事件传播*/
        stopProp(evt);
    }

    /*阻止事件传播(该函数可以跨浏览器)*/
    var stopProp = function (evt) {
        /*DOM事件模型*/
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else { /*IE事件模型*/
            evt.cancelBubble = true;
        }
    }
    /*为被拖动对象的鼠标移动mousemove和鼠标松开mouseup注册事件处理器*/
    if (document.addEventListener) {
        /*DOM事件模型*/
        /*在事件捕获阶段绑定事件处理器*/
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
    } else if (document.attachEvent) {
        /*IE事件模型*/
        /*设置该元素直接捕获该事件*/
        target.setCapture();
        target.attachEvent("onmousemove", moveHandler);
        target.attachEvent("onmouseup", upHandler);
        /*将失去捕获事件当成鼠标松开处理*/
        target.attachEvent("onlosecapture", upHandler);
    }

    stopProp(event);

    /*取消事件默认行为*/
    if (event.preventDefault) {
        /*DOM事件模型*/
        event.preventDefault();
    } else {
        /*IE事件模型*/
        event.returnValue = false;
    }

    /*鼠标移动的事件处理器*/
    function moveHandler(evt) {
        if (!evt) evt = window.event;
        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltaY) + "px";
        stopProp(evt);
    }
}

