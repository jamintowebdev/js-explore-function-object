var computer = {
    price: 30000,
    storage: '320GB',
    color: 'silver',
    processor: 'intel core i-3'
}

// single property output
console.log(computer.price);

// full object output
console.log(computer);

// even we want to keep the object's properties value to another variable
var computerPrice = computer.price;
console.log(computerPrice);

// set a object property value and change the previous value
computer.price = 25000;
console.log(computer);


// different ways to set a value of an object property
computer.price = 27000;

computer['price'] = 28000;

var priceProperty = 'price';
computer[priceProperty] = 19000;

console.log(computer);


// another for practice
var storageProperty = 'storage';
computer[storageProperty] = '512GB';

computer['storage'] = '1TB';
computer.storage = '5TB';

console.log(computer);


