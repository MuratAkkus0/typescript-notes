var a; // Tipi any olarak default olarak tanimlanir ve bundan dolayi her tipte bir degere atanabilir hata vermez.
a = 6;
a = true;
a = 'string';
var b = 'string';
var c = 5;
var d = true;
var e = [5, 'a', true]; // Burada icerisinde her tipten deger tutabilecegin bir any array tanimlarsin.
var f = ['a', 's']; // Burada string bir array elde edersin ve icerisine sadece string degerler yazabilirsin.
var g = [5, 3, 33]; // Bu sekilde de bir array tanimlanabilir. <> isaretinin arasina tip yazilir.
var h = ['a', 5, true]; // --TUPLE-- Bu sekilde de karisik bir arraydeki elemanlarin her siradaki elemana ozel bir tip tanimlayabiliriz.
// Belli bir baslik icin tanimlaman gereken degiskenleri ENUM adi altinda bir obje nin altinda tanimliyor gibi tanimlayabilirsin. ENUM o degiskenin index degerini veya eger onceden tanimlanmis ise tanimlanan degeri yollar.
var creditPayment = 0;
var eftPayment = 1;
var transferPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["eft"] = 99] = "eft";
    Payment[Payment["transfer"] = 1] = "transfer";
    Payment[Payment["deneme"] = 2] = "deneme";
})(Payment || (Payment = {}));
;
console.log(Payment.credit);
console.log(Payment.eft);
console.log(Payment.transfer);
console.log(Payment.deneme);
