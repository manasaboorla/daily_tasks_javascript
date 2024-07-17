
//if,else if,else statement

//example1
let num1=-5;
if(num1>0)
    console.log(`${num1} is positive`)
else if(num1===0)
console.log(`${num1} is zero`);
else
console.log(`${num1} is negative`)

//example2
let number1=8;
let number2=3;

if(number1%2===0 && number2%2===0)
    console.log(`${number1} and ${number2} are divided by 2`);

else if (number1%2===0)
    console.log(`${number1} is devided by 2`)

else if (number2%2===0)
    console.log(`${number2} is devided by 2`)
else
    console.log(`${number1} and ${number2} are not divided by 2`);
//output :  8 is devided by 2



//switch case operator
let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thursday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("saturday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
            console.log("Invalid day number");
}
//output: wednesday


//for loop numbers 1-10
for( let i=1; i<=10; i++)
{
    console.log(i)
}

//reverse for loop numbers 10-1
for( let k=10; k>=1;k--)
{
    console.log(k)
}

//Ternary operator
let age=40
console.log(age >= 18 ? "Adult" : "Minor")
//output: Adult