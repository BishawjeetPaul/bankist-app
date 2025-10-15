'use strict';

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

const month = ["Jan", "March", "April", "June"];
month.splice(1, 0, "Fed");
// Insert at index 1
console.log(month); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

month.splice(4, 1, 'May');
console.log(month);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

*/

// ---------- Loopinh-Array-forEach ---------- //

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You Deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(movement)}`);
    };
};

console.log('-----FOREACH-----');

movements.forEach(function(movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You Deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(movement)}`);
    };
});

*/

// ----------forEach-with-Maps-and-Sets---------- //

// MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

