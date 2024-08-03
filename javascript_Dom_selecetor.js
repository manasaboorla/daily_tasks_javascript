
//document.getElemenById
let text = document.getElementById("ptext")
text.style.fontSize="50px";
console.log(text)

 document.getElementById("btn1").style.backgroundColor = "red"


 //document.getElemenByClassName
 let headtext = document.getElementsByClassName("htag")
 headtext[0].style.color = "blue";
 headtext[1].style.color = "red"

//using Tagname

 let border = document.getElementsByTagName("h2")
border[0].style.border = "3px solid green"
 

//querySelector
document.querySelector("h2").style.fontStyle ="italic"


//using queryselectorAll
function changeMargin(item){
    document.querySelectorAll('.item').forEach(el=>{
        el.style.margin="50px 100px"
    })
}
changeMargin()

// Change Styles of Unique Element About Me
let aboutMeElement = document.getElementById('aboutMe');
aboutMeElement.style.backgroundColor = 'yellow';
aboutMeElement.style.padding = '20px';
aboutMeElement.style.borderRadius = '10px';
aboutMeElement.style.fontWeight = 'bold';


