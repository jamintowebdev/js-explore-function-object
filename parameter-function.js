/* // function practice 1
function bringSingara(taka) {
    console.log('singara er jonno dise ', taka);
    console.log('Mama singara den');
}

bringSingara(100);


// function practice 2
function bringPuri(taka) {
    console.log('bringPuri er jonno dise ', taka);
    console.log('Mama Puri den');
}

bringPuri(250);


// function practice 2
function bringRuti(taka) {
    console.log('bringRuti er jonno dise ', taka);
    console.log('Mama Ruti den');
}

var money = 350;
bringRuti(money);
 */


// function practice with return 4
function bringMisti(taka) {
    console.log('bringMisti er jonno dise ', taka);
    console.log('Mama Misti den');

    var mistiPrice = 20;
    var mistiQuantity = taka / mistiPrice;
    return mistiQuantity;
}

var money = 300;
var misti = bringMisti(money);

console.log('ai nen mama apnar misti 20 tk dore 300 takar misti hoy', misti, 'ta');