
//using Push and Pop //
let Array=[ ]
console.log(Array)
Array.push(1,2,3)
console.log(Array)
Array.pop()
console.log(Array)

// using Shift and Unshift

let array1=["a","b","c"]
array1.shift()
console.log(array1)
array1.unshift("z")
console.log(array1)

//slice
let array2 = [1,2,3,4,5]
let newarray = array2.slice(1,4)
console.log(newarray)

//splice
let array3=["red","green","blue","yellow"]
let splicearray=array3.splice(2,1,"purple","orange")
console.log(splicearray)
console.log(array3)


//object
//object creation
 let car ={
    make:"mahendra",
    model:"mahendra Scarpio",
    year:2022
 }
 console.log(car)

 //property Deletion

 delete car.year
 console.log(car)


 //Nested Objects

 let person = {
    pname:"siri",
    age:25,
    Address:{
        street:"phase-1",
        city: "warangal",
        zipcode:564534
    },
}
    console.log(person)

    // Accessing Object Properties
    console.log(person.Address.city)


// Basic Arrow Function
    let greet = (name)=>{
        return `Hello ${name}`
    }
    console.log(greet("manasa"))
    

//output

// []
// [ 1, 2, 3 ]
// [ 1, 2 ]
// [ 'b', 'c' ]
// [ 'z', 'b', 'c' ]
// [ 2, 3, 4 ]
// [ 'blue' ]
// [ 'red', 'green', 'purple', 'orange', 'yellow' ]
// { make: 'mahendra', model: 'mahendra Scarpio', year: 2022 }
// { make: 'mahendra', model: 'mahendra Scarpio' }
// {
//   pname: 'siri',
//   age: 25,
//   Address: { street: 'phase-1', city: 'warangal', zipcode: 564534 }
// }
// warangal
// Hello manasa