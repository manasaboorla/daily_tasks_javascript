

//shallowcopy
let person={
    name:'manasa',
    age:20,
    email:'manasa@g.com',
    address:{
        pincode:1111,
        landmark:'vidyanagar'
    }
}
 let person1={...person}
 person1.age=30
 console.log("____person_original:",person)
 console.log("____person1_copy:",person1)

 let person_details={...person}
 let person_details_obj2={address:{pincode:12345}}
 Object.assign(person_details,person_details_obj2)


 console.log("____person_original",person)
 console.log("____person1_copy",person_details)


 //deepcopy
 let student={
    name:'mounika',
    id:18,
    age:25,
    address:{
        place:"hyd",
        pincode:77777
    }
}

 var copied_std = JSON.parse(JSON.stringify(student))
 copied_std.address.pincode=788787
 console.log(student)
 console.log(student,copied_std)


//using spread operator
//spread in arrays
 let arr1 =[1,2,3,4]
 let arr2 =[5,6,7,8]
 let new_array=[...arr1,...arr2]
 console.log(new_array)


//spread in objects
 let Object1={
    name:"manasa",
    place:"hyd"
 }
 let Object2={
   age:26,
   emailId:"Manasa@g.com"
 }
 Object={...Object1,...Object2}
 console.log(Object)

//rest in function
function sum(...nums){
    let sum = nums.reduce((a,b) =>
    {return a+b})
    return sum
}

//Rest in Array Destructuring
console.log("sum of nums",sum(6,7,8,9,5))
let array=[5,10,15,20,25]
let[first,second,...rest] = array
console.log(first ,second, rest)


//output
// ____person_original: {
//   name: 'manasa',
//   age: 20,
//   email: 'manasa@g.com',
//   address: { pincode: 1111, landmark: 'vidyanagar' }
// }
// ____person1_copy: {
//   name: 'manasa',
//   age: 30,
//   email: 'manasa@g.com',
//   address: { pincode: 1111, landmark: 'vidyanagar' }
// }
// ____person_original {
//   name: 'manasa',
//   age: 20,
//   email: 'manasa@g.com',
//   address: { pincode: 1111, landmark: 'vidyanagar' }
// }
// ____person1_copy {
//   name: 'manasa',
//   age: 20,
//   email: 'manasa@g.com',
//   address: { pincode: 12345 }
// }
// {
//   name: 'mounika',
//   id: 18,
//   age: 25,
//   address: { place: 'hyd', pincode: 77777 }
// }
// {
//   name: 'mounika',
//   id: 18,
//   age: 25,
//   address: { place: 'hyd', pincode: 77777 }
// } {
//   name: 'mounika',
//   id: 18,
//   age: 25,
//   address: { place: 'hyd', pincode: 788787 }
// }
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// { name: 'manasa', place: 'hyd', age: 26, emailId: 'Manasa@g.com' }
// sum of nums 35
// 5 10 [ 15, 20, 25 ]