//multiplication table
let k = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

//sum of Even numbers between 1 to 50
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);

//sum of odd numbers 1 t0 20
let sum1 = 0;
let i = 0;
while (i <= 20) {
  if (i % 2 == 1) {
    sum1 += i;
  }

  i++;
}
console.log(sum1);

//factorial number
let fact = 1;
let x = 1;
while (x <= 5) {
  fact *= x;
  x++;
}
console.log(fact);

// prime numbers from 2 to 20 using a while loop.
let number = 2;
let flag = 1;
while (number < 21) {
  let j = 2;
  while (j <= number / 2) {
    if (number % j === 0) {
      flag = 0;
      break;
    }
    j += 1;
  }
  if (flag == 1) {
    console.log(number);
  }
  flag = 1;
  number += 1;
}
console.log();

//output
// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35
// 5 X 8 = 40
// 5 X 9 = 45
// 5 X 10 = 50
// 650
// 100
// 120
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
