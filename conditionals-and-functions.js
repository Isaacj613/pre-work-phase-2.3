/*
* Conditionals, Functions, Scope and Loops.
 */

/*
// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9.

// Not Equals
let notEquals = 5 !== 2;

*/

/*
let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
//console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has the lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(9);
console.log(squaredNumber);
 */

/*
let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1, 2, 10)

//addNumbers( 2, 3, 8);
//console.log(x);
 */

/*let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray [0])
let newArr = ourArray[4];
console.log(newArr[0]);
 */


/*
let ourArray = [1, 2, 3, 4, 5, 6, 7]

let arrLen = ourArray.length
for(let i = 0; i<arrLen; i++){
    console. log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: '+ j );
    }
}
 */


let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}
