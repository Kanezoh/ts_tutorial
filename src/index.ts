function add(a: number, b: number) {
    return a + b;
}

// 5 wayss to declare function

function greet(name: string) {
    return 'hello' + name
}

let greet2 = function(name: string) {
    return 'hello' + name
}

let greet3 = (name: string) => {
    return 'hello' + name
}

let greet4 = (name: string) =>
     'hello' + name

let greet5 = new Function('name', 'return "hello" + name')

// optional parameters

function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')
log('User signed in', 'dq21532')

// default parameters

function log2(message: string, userId = 'Not signed in') {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId)
}

log('Page loaded')
log('User signed in', 'dq21532')

function sum(numbers: number[]) :number {
    return numbers.reduce((total, n) => total + n, 0)
}
sum([1,2,3])

// bad way

function sumVariadic(): number {
    return Array.from(arguments).reduce((total, n) => total + n, 0)
}

// rest parameters

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

sumVariadicSafe(1,2,3,4,5,5)

// call, apply, bind
add(10,20)
add.apply(null, [10,20]) // bind this to null, and spreads second arguments over function's parameter.
add.call(null, 10,20)    // same as #apply, but don't spread arguments, but applies it in order.

// binds a this-argument and a list of arguments to the function and make new function.
// in this code, use parenthesis () to call new function.
add.bind(null, 10, 20)()

// this

function fancyDate(this: Date) {
    return this.getDate()
}
fancyDate.call(new Date)