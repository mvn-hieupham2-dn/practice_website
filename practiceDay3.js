// 1
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6';

// 2
let user = { name: 'David' };
let card = { amount: 7, product: 'Bar', unitprice: 42 };
let message = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// 3
let foo = (x, y, ...args) => {
    return (x + y) * args.length;
}
foo(1, 2, 'hello', true, 7) === 9;

// 4
let sum = (x, y = 7, z = 42) => {
    return x + y + z;
}

// 5
let evens = [1, 2, 3, 4, 5, 6];
let odds = evens.map((v) => v + 1);
let pairs = evens.map((v) => {
    return { even: v, odd: v + 1 };
});
let nums = evens.map((v, i) => v + i);
let fives = [];
nums.forEach((v) => (v % 5 === 0 ? fives.push(v) : ''));

// 6
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
// 8
let showMessAfterTimeout = (who, timeout) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve(`Hi ${who}!`);
        }, timeout);
    });
}
showMessAfterTimeout('Foo', 100)
    .then(async (msg1) => {
        const msg = await showMessAfterTimeout('Bar', 200);
        return msg1 + ' ' + msg;
    })
    .then((msg) => console.log(`Finish after 300ms: ${msg}`));
// 9
let arr1 = [5,10,20];
for (let item of arr1) {
console.log(item);
} 
arr1.findIndex((item) => item % 2 === 0); 