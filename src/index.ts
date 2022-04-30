import { fileURLToPath } from "url";

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

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a,b] = [b, a+b]
    }
}

let fibonacciGenrator = createFibonacciGenerator()
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())
console.log(fibonacciGenrator.next())

function* createNumbers(): IterableIterator<number> {
    let n = 0
    while(1) {
        yield n++
    }
}

// Iterator
let numbers = {
    *[Symbol.iterator]() {
        for(let n = 1; n<=10;n++) {
            yield n
        }
    }
}

// call signature
type Greet = (name: string) => string

type Log = (message: string, userId?: string) => void

type SumVariadicSafe = (...numbers: number[]) => number

let newLog : Log = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}


// Overloaded Function Types
// shorhand call signature
//type Log = (message: string, userId?: string) => void

// full call signature
//type Log = {
//    (message: string, userId?: string): void
//}

//type Reserve = {
//    (from: Date, to: Date, destination: string): Reservation
//    (from: Date, destination: string): Reservation
//}
//
//let reserve: Reserve = (
//    from: Date,
//    toOrDestination: Date | String,
//    destination?: string
//) => {
//    //
//}

type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}

//let warnUser: WarnUser = (warning: string) => {
//    if (warnUser.wasCalled) {
//        return
//    }
//    warnUser.wasCalled = true
//    console.log(warning)
//}
//warnUser.wasCalled = false

//type Filter = {
//    <T>(array: T[], f: (item: T) => boolean): T[]
//}
//let filter: Filter = (array, f) => {
//    
//}

// ex. chess

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // Kings
      new King('White', 'E', 1),
      new King('White', 'E', 8),
    ]
  }

}

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor (
    private file: File,
    private rank: Rank
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

abstract class Piece {
  protected position: Position
  constructor (
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

type State = {
  [key: string]: string
}

class StringDatabase {
  state: State = {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value
  }
  static from(state: State) {
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}