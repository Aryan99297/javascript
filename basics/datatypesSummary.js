//primitive num strng bool ,null ,undefined,symbol,bigInt
//non primitive array, fn, obj
let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id===anotherid)   //false
const bigNumber=37337373787384878497783n
//primitive typeof values : 
// Number => number
// String => string
// Boolean => boolean
// null => object
// Undefined => undefined
// Symbol => symbol
// BigInt => bigint

//for non prem 
// array => object.
// object => object.
// function => function. // said as : (function object)
let myObj = {
        name: "hitesh",
            age: 22,
            }
console.log(typeof myObj)
console.log(typeof bigNumber);  //bigint
