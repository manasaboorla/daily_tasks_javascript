//localStorage: Setting and Getting Data
localStorage.setItem('name','manasa');
let s1name=localStorage.getItem('name');
console.log("localstoragedata",s1name);


//sessionStorage: Setting and Getting Data

sessionStorage.setItem('place','hyderabad');
let s1place=sessionStorage.getItem('place');
console.log("sessionstoragedata",s1place);
 
// Removing Items from Storage
localStorage.removeItem('name');
let removdata1=localStorage.getItem('name');
console.log("localremovdata", removdata1);
sessionStorage.removeItem('place');
let removdata2=sessionStorage.getItem('place');
console.log("seesionremovdata",removdata2);


// JSON Storage
const student = {
    username:"kavya",
    age:26,
    phno:11111,
    gender:'female'
}
localStorage.setItem('student',JSON.stringify(student));
let User = JSON.parse(localStorage.getItem('student'))
console.log('User obj:',User)

sessionStorage.setItem('student1',JSON.stringify(student))
let User1 = JSON.parse(sessionStorage.getItem('student1'))
console.log('User1 obj',User1)


// Clearing Storage in local and session
localStorage.clear();
console.log(localStorage.getItem('student'))
sessionStorage.clear()
console.log(sessionStorage.getItem('student1'))