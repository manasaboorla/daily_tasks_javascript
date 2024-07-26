
//forEach
let arr1= [1,2,3,4,5]
 arr1.forEach((itr,index)=>{
    console.log(itr)
 })

 //map
 let arr2=[5,10,15,20,25]
 let double_array = arr2.map((iterator,index)=>{
    return(iterator*2)
 })
 console.log("original_array",arr2)
 console.log("map_method:",double_array)

//filter
let array1 =[1,2,3,4,5,6,7,8,9]
let evennumber = array1.filter((iterator,index) =>{
    if(iterator%2===0)
        return iterator
})
console.log("original_array:",array1)
console.log( "filter_method:",evennumber)

//reduce
let array2=[4,5,6,7,8,9]
let sum = array2.reduce((acc,itr)=>{
    return acc= acc+itr
},0)
console.log("reduce_method:",sum)


//find
let persons =[
    {
        name:'manoj',
        age:18
    },
    {
        name:'siri',
        age:22
    },
    {
        name:'rakesh',
        age:27
    },
    {
        name:'kavya',
        age:26
    },
    {
        name:'navya',
        age:17
    },
    {
        name:'manu',
        age:28
    }
]

let find_person = persons.find((person)=>person.age>25)
    console.log(find_person.name)


let findIndex = persons.findIndex((iterator,index)=>iterator.age<18)
    console.log("the indexOf person<18___",findIndex)
