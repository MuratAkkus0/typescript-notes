function getAvarage(a: number, b: number, c?: number): string { // burada disardan alacagimiz parametrelere bir tip atadik ve daha sonra parantezin disindaki iki nokta ile de functionun retur edecegi degere tip tanimlariz. c parametresinin  yanindaki soru isareti c degiskeninin zorunlu olmamasini saglar yani fonksiyona eger bu parametre gonderilmez ise hata almayiz. 
    let total:number = a+b;
    let count: number = 2;
    let result: string;
    if (typeof(c) !== 'undefined'){
        result = 'result : ' + (c+total)/3;
        count++;
    }else{
        result = 'result : ' + total/3;
    }
    return result;
}

function getUncertianlyParams(...a: number[]):string { // Burada sinirsiz deger alabilen bir fonksiyonun tum parametreleri icin bir tip tanimlamasu yaptik. 
    let result:string;
    let total: number = 0;
    for (let i = 0 ; i <a.length ; i++){
        total += a[i];

    }

    result = 'result : ' + total;
    return result;
}

console.log(getAvarage(5,5,8))
console.log(getAvarage(5,5)) // c nin yanindaki ? sayesinde hata almayiz.

console.log(getUncertianlyParams(5));
console.log(getUncertianlyParams(5,2,2));
console.log(getUncertianlyParams(5,55)); // spread operator sayesinde hicbir hata almayiz cunku alacagi deger sayisini belirsiz olarak tanimladik.



