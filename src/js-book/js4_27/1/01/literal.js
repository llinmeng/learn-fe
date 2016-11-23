/**
 * Created by hh on 2016/4/27.
 */

/*
var person = {
    name: "meng",
    age: 20,
    eat: function () {
        alert("yes");
    }
}

person.height = 100;
alert(person.name);
*/

//函数构造器
function  Person() {

}
Person.prototype = {
    name: "meng",
    age: 30,
    eat: function () {
        alert("can");
    }
}
var p = new Person();
document.write(p.name);
