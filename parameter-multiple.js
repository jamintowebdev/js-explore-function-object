// parameter of function practice 01
function addTwoNumbers(number1, number2) {
    // console.log(number1);
    // console.log(number2);
    console.log(number1, number2);
}

addTwoNumbers(20, 30);



// parameter of function practice 02
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
}

var firstNumber = 35;
var secondNumber = 15;
addTwoNumbers(firstNumber, secondNumber);



// parameter of function practice 03 : return korar somoy function o tokon function ka call korle ... function ta ka akta variable e rakhte hobe

// adding two parameter of a function:

function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 15;
var result = addTwoNumbers(firstNumber, secondNumber);

console.log('result value:', result);


// multiply in a function :
function multiplyTwoNumbers(num1, num2) {
    var output = num1 * num2;
    return output;
}

var total = multiplyTwoNumbers(20, 30);
console.log('Total after multiplication:', total);



// subtract in a function :
function subtractTwoNumbers(num1, num2) {
    var output1 = num1 - num2;
    return output1;
}

var totalOne = subtractTwoNumbers(50, 30);
console.log('Total after subtract:', totalOne);



// subtract in a function :
function divisionTwoNumbers(num001, num002) {
    var output2 = num001 / num002;
    return output2;
}

var totalTwo = divisionTwoNumbers(50, 10);
console.log('Total after division', totalTwo);