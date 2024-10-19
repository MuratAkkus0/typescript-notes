// interface Coordinate { // sürekli tekrar eden belirli bir tipte objenin veya baska bir degiskenin tip tanimlamasini tekrar ve tekrar yapmamak icin bunu interface ile direk olarak kendi ozel tipimize tanimlayip kullanabiliriz. Artik Coordinate isimli bir tipimiz var ve bunu hangi degiskene verirsek bu türde bir obje olarak tanimlanir ve burada belirledigimiz sekilde degerler almasi gerekir.
//     x: number,
//     y: number,
//     c?: string,
//     d?: boolean
// }
// let getParams = (params: Coordinate): void => { // Bu sekilde bir konu hakkinda bekledigimiz parametreleri bir obje icinde alabiliriz ve bu obje icindeki parametlerin tipini ve hangi parametrelerin hangilerinin bazen olup bazen olamayabilecegini tanimlayabiliriz.
//     for (let i in params) {
//         console.log(params[i])
//     }
// }
// let getDistance = (pointA: Coordinate, pointB: Coordinate): void => {
//     let total: number = pointA.x - pointB.y;
//     console.log(total);
// }
// getDistance({
//     x: 8,
//     y: 5
// },
//     {
//         x: 11,
//         y: 5
//     })
// getParams({
//     x: 4,
//     y: 5,
//     c: 'asd'
// });
// interface Vehicle { // Bu sekilde bir interface ve interface icin gerekli olacak methodlarin tip tanimlamasini yapabilirsin.
//     brand: string,
//     age: number,
//     addPassenger(id: number, name: string, age: number),
//     deletePassenger(id: number),
//     getCoordinate(params: Coordinate),
//     getDistance(pointA: Coordinate, pointB: Coordinate),
//     getVehicleInfo(): string
// }
// // typescript implemantation
// interface Person {
//     name: string,
//     age: number,
// }   
// class Student implements Person {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age
//     }
// }
// let newStudent = new Student('ali', 7);
// console.log(newStudent.name);
/*

** public : Class icindeki ozellige veya methoda alt classlar ve bu classdan veya alt classdan olusturulmus instance lardan ozellik olarak erisilebilir,

** protected: Class icerisindeki property veya method a sadece bu class icinden veya alt class in icinden erisilebilir. Ancak bu class dan veya alt classdan uretilen bir objeden erisilemez.

** private: Class icerisindeki bir property veya method eger private ise buna sadece bu sinif icerisinden erisilebilir. Bu siniftan turetilen bir ornek veya bir alt siniftan buna erismek mumkun degildir.

*/ 
