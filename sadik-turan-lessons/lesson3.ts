let message; // Message degiskenine basta bir tip tanimlamadigimiz icin tipi any olur ve daha sonra bunu string veya bir number degere de tanimlasak bu deger degismez yani any olarak kalir.
message = 'ali veli' // tipi hala any. Bu nedenle string methodlarini kullanamayiz. or/length

let mesLength = (message as string).length; // Bu sekilde tipini stringe veya baska bir türe degistirebiliriz ve problemsiz olarak o tipe ait methodlari kullanabiliriz.
let count = (<string>message.length); // Bu da tip donusumunun baska bir yoludur.

console.log(typeof(message));
console.log(typeof((<string>message)));
console.log(typeof((message as string)));

