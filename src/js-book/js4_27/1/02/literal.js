/**
 * Created by hh on 2016/4/27.
 */
/*
function People() {

}
People.prototype.say = function () {
    alert("hello");
}

function Student() {

}
//继承
Student.prototype = new People();
var s = new Student();
s.say();
*/

/*
function People() {

}
People.prototype.say = function () {
    alert("hello");
}

function Student() {

}

Student.prototype = new People();
//复写
Student.prototype.say = function () {
    alert("stu-hello");
}
var s = new Student();
s.say();
*/

/*
function People() {

}
People.prototype.say = function () {
    alert("hello");
}

function Student() {

}

Student.prototype = new People();
//调用父类的方法
var superSsay = Student.prototype.say;
Student.prototype.say = function () {
    superSsay.call(this);
    alert("stu-hello");
}
var s = new Student();
s.say();
*/
/*
function People(name) {
    this._name = name;
}
People.prototype.say = function () {
    alert("peo_hello, " + this._name);
}

function Student(name) {
    this._name = name;
}

Student.prototype = new People();
//调用父类的方法
var superSsay = Student.prototype.say;
Student.prototype.say = function () {
    superSsay.call(this);
    alert("stu_hello, " + this._name);
}
var s = new Student("meng");
s.say();
*/

//封闭
(function () {
    var n = "mengs";
    function People(name) {
        this._name = name;
    }
    People.prototype.say = function () {
        alert("peo_hello, " + this._name + n);
    }
    window.People = People;
}());

(function () {
    function Student(name) {
        this._name = name;
    }

    Student.prototype = new People();
//调用父类的方法
    var superSsay = Student.prototype.say;
    Student.prototype.say = function () {
        superSsay.call(this);
        alert("stu_hello, " + this._name);
    }
    window.Student = Student;
}());
var s = new Student("meng");
s.say();


