/**
 * Created by hh on 2016/12/13.
 */
onmessage = function (event) {
    var data = JSON.parse(event.data); /*把JSON字符串恢复成JavaScript对象*/
    var start = data.start;
    var end = data.end;
    var count = data.count;
    var result = "";
    search:
    for (var n = start; n <= end; n++) {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
               continue search;
            }
        }
        result += (n + ",");
    }

    var sub = new Worker("worker2.js");
    sub.postMessage({result : result, count : count});
    sub.onmessage = function (event) {
        postMessage(event.data);
    }

}