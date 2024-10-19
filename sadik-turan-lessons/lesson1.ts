let a; // Tipi any olarak default olarak tanimlanir ve bundan dolayi her tipte bir degere atanabilir hata vermez.
a = 6;
a = true;
a = 'string'

let b: string = 'string';
let c: number = 5;
let d: boolean = true;
let e: any[] = [5,'a',true] // Burada icerisinde her tipten deger tutabilecegin bir any array tanimlarsin.
let f: any[string] = ['a','s']; // Burada string bir array elde edersin ve icerisine sadece string degerler yazabilirsin.
let g: Array<number> = [5,3,33]; // Bu sekilde de bir array tanimlanabilir. <> isaretinin arasina tip yazilir.
let h: [string,number,boolean] = ['a',5,true] // --TUPLE-- Bu sekilde de karisik bir arraydeki elemanlarin her siradaki elemana ozel bir tip tanimlayabiliriz.

// Belli bir baslik icin tanimlaman gereken degiskenleri ENUM adi altinda bir obje nin altinda tanimliyor gibi tanimlayabilirsin. ENUM o degiskenin index degerini veya eger onceden tanimlanmis ise tanimlanan degeri yollar.

let creditPayment = 0;
let eftPayment = 1;
let transferPayment = 2;

enum Payment {credit,eft=99,transfer=1,deneme};

console.log(Payment.credit)
console.log(Payment.eft)
console.log(Payment.transfer)
console.log(Payment.deneme)