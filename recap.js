// 1. variable
var favoriteBook = '4 hours work book';

// 2. *** Array related js ***

// To declare an array, you have to do like the following
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];

// To know the index number of any array as output , do like the following
var shoeDogIndex = bookList.indexOf('shoe dog');

// To change the array's element:
bookList[1] = 'Story Brand';

// To add element in the array's last:
bookList.push('Small Giants');
bookList.push('Big Giants');

// To remove an element from the array's last position:
bookList.pop();



// 3. ****** Conditionals ******

// if else conditionals

// Check if the element is in 1 num position of the array ( we changed the hooked element)

if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}


// 4. loop


// While loop

// loop variable : whenever you will use while loop, then you must change the value of the variable
var i = 0; 
while(i<15) {
    console.log(i);
    console.log('The number is ');
    i++;
}


// For Loop : You must change the value of the variable

for(var i = 0; i<15; i++) {
    console.log(i);
    console.log('I am a for loop');
}


console.log(shoeDogIndex);
console.log(bookList);

