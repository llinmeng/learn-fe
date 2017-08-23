/**
 * Created by hh on 2016/4/27.
 */
/*
function Person() {
    var _this = {}
    _this.sayHello = function () {
        alert("hello");
    }
    return _this;
}

function Teacher() {
    var _this = Person();
    return _this;
}

var t = Teacher();
t.sayHello();
*/

/*
function Person() {
    var _this = {}
    _this.sayHello = function () {
        alert("hello");
    }
    return _this;
}

function Teacher() {
    var _this = Person();
    //复写
    _this.sayHello = function () {
        alert("t_hello");
    }
    return _this;
}

var t = Teacher();
t.sayHello();*/

/*function Person() {
    var _this = {}
    _this.sayHello = function () {
        alert("phello");
    }
    return _this;
}

function Teacher() {
    var _this = Person();
    var superSay = _this.sayHello();
    _this.sayHello = function () {
        alert("t_hello");
    }
    return _this;
}

var t = Teacher();
t.sayHello();*/

/*function Person(name) {
    var _this = {}
    _this.name = name;
    _this.sayHello = function () {
        alert("phello, " + _this.name);
    }
    return _this;
}

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello();
    _this.sayHello = function () {
        alert("t_hello, " + _this.name);
    }
    return _this;
}

var t = Teacher("meng");
t.sayHello();*/

(function () {
    var n = "mm";
    function Person(name) {
        var _this = {}
        _this.name = name;
        _this.sayHello = function () {
            alert("phello, " + _this.name + n);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello();
    _this.sayHello = function () {
        alert("t_hello, " + _this.name);
    }
    return _this;
}

var t = Teacher("meng");
t.sayHello();