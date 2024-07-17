
// Functions without Parameters

function greet(){
    console.log("hello,World")
}
greet()


// Functions with Parameters

function addnumbers(a,b){
   let sum= a+b;
    console.log(sum)
}
addnumbers(45,78)
addnumbers(30,60)
addnumbers(20,15)
addnumbers(12,16)


// Functions with Return Statements
function multiply(x,y){
    return x*y
}
let multiplyresult = multiply(5,6)
console.log( "product of x and y ", multiplyresult)


// Combining Functions
function calculateRectangleArea(length,width)
{
return multiply(length,width)
}
let result=calculateRectangleArea(20,10)
console.log( "area",result)

// Default Parameters
function greetUser(name = "Guest"){
    console.log(`Hello,${name}`)
}
greetUser()
greetUser("Manasa")

// output:
// hello,World
// 123
// 90
// 35
// 28
// product of x and y  30
// area 200
// Hello,Guest
// Hello,Manasa