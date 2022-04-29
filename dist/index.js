"use strict";
function add(a, b) {
    return a + b;
}
// 5 wayss to declare function
function greet(name) {
    return 'hello' + name;
}
let greet2 = function (name) {
    return 'hello' + name;
};
let greet3 = (name) => {
    return 'hello' + name;
};
let greet4 = (name) => 'hello' + name;
let greet5 = new Function('name', 'return "hello" + name');
// optional parameters
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'dq21532');
// default parameters
function log2(message, userId = 'Not signed in') {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}
log('Page loaded');
log('User signed in', 'dq21532');
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]);
// bad way
function sumVariadic() {
    return Array.from(arguments).reduce((total, n) => total + n, 0);
}
// rest parameters
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3, 4, 5, 5);
// call, apply, bind
add(10, 20);
add.apply(null, [10, 20]); // bind this to null, and spreads second arguments over function's parameter.
add.call(null, 10, 20); // same as #apply, but don't spread arguments, but applies it in order.
// binds a this-argument and a list of arguments to the function and make new function.
// in this code, use parenthesis () to call new function.
add.bind(null, 10, 20)();
// this
function fancyDate() {
    return this.getDate();
}
fancyDate.call(new Date);
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenrator = createFibonacciGenerator();
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
console.log(fibonacciGenrator.next());
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
// Iterator
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};
let newLog = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
let warnUser = (warning) => {
    if (warnUser.wasCalled) {
        return;
    }
    warnUser.wasCalled = true;
    console.log(warning);
};
warnUser.wasCalled = false;
//# sourceMappingURL=index.js.map