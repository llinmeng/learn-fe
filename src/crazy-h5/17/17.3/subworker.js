/**
 * Created by hh on 2016/12/13.
 */
onmessage = function (event) {
    var data = event.data;
    var primeNums = data.result.split(",");
    var randResult = "";
    for (var i = 0; i < data.count; i++) {
        var randIndex = Math.floor(Math.random() * (primeNums.length - 1));
        randResult += (primeNums[randIndex] + ",");
    }
    postMessage(randResult);
}