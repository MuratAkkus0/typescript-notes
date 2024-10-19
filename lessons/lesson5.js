var getParams = function (params) {
    for (var i in params) {
        console.log(params[i]);
    }
};
var getDistance = function (params) {
    var total = params.x - params.y;
    console.log(total);
};
getDistance({
    x: 8,
    y: 5
});
getParams({
    x: 4,
    y: 5,
    c: 'asd'
});
