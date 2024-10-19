function getAvarage(a, b, c) {
    var total = a + b;
    var count = 2;
    var result;
    if (typeof (c) !== 'undefined') {
        result = 'result : ' + (c + total) / 3;
        count++;
    }
    else {
        result = 'result : ' + total / 3;
    }
    return result;
}
function getUncertianlyParams() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result;
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    result = 'result : ' + total;
    return result;
}
console.log(getAvarage(5, 5, 8));
console.log(getAvarage(5, 5)); // c nin yanindaki ? sayesinde hata almayiz.
console.log(getUncertianlyParams(5));
console.log(getUncertianlyParams(5, 2, 2));
console.log(getUncertianlyParams(5, 55)); // spread operator sayesinde hicbir hata almayiz cunku alacagi deger sayisini belirsiz olarak tanimladik.
