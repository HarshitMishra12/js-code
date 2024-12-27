// Primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// In javascript we never define languages
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const = anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567898987654321n


//Reference (Non Primiive)

// Array, Objects, Functions

const heros = ["shaktiman", " naagraj", "doga"];
let myObj = {
    name: "harshit",
    age: 20,
}

function(){}

//************************MEMORY*****************************
 //Stack ( Primitive), Heap (Non-Primitive)

 let myyoutubename = "harshit Mishra.com"

 let anothername = myyoutubenameanother = "chaiaurcode"

 console.log(myyoutubename);
 console.log(anotherneme);

 let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "harshit@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);

