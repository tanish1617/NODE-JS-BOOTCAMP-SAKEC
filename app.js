/*console.log("Hello World!");
const cowsay = require("cowsay");
console.log(cowsay.say({text : "I'm a mooooooodule", e:"oO",T:"U"}));
const abc = 5; Assignment to constant variable
abc = 6;

const t = 7;
console.log(t);

const s = 1617;
console.log("The value of a is " + s);
console.log(`The value of a is also ${s}`);

function greet(name,age){
    let message = `Hello ${name}! You are ${age} years old`;
    return message;
}
    const greeting = greet("Tanish",19);
    console.log(greeting);

    let counter = 0;
    while (counter < 3){
     console.log(`LOOP ITERATION: ${counter}`);
    counter = counter + 1; counter+=1;
    }
    console.log("LOOP IS FINISHED");

    const fruits = ["Mango","Kiwi","Apple"];
    for(let i = 0;i<fruits.length;i++){
        const fruit = fruits[i];
        console.log(`Fruit at index ${i} is: ${fruit}`);
        }
    
let temperature = 28;
if(temperature>30){
    console.log("It's a hot day!!");
}else if(temperature>20){
    console.log("It's a pleasant day!!");
}else{
    console.log("It's a bit chilly day!!");
}

function calculateArea(lenght,width = 1){
    return lenght*width;
}

const rectangleArea = calculateArea(45,17);
console.log(`Area of rectangle is: ${rectangleArea}`);

const squareArea = calculateArea(17);
console.log(`Area of a square with side 17(using default width) is: ${squareArea}`);

const getSum = function(a,b) { return a + b; };

const sum = getSum(16,17);
console.log(`The sum of 16 and 17 is ${sum}`);

const multiply = (x,y)=> x * y;
console.log(`the product of 7 and 8 is: ${multiply(7,8)}`);

function mult(x,y){
    const c = x*y;
    return c;
}

prob1
let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i%3 == 0 || i%5 == 0) {
    sum  = sum +  i;
  }
}
console.log(`The sum of all numbers below 1000 which are divisible by 3 or 5 are: ${sum}`);

prob2
let sum = 0, a = 0, b = 1;
let c;
for (let i = 0; ; i++) {
    c = a + b;
    console.log(c);
    if (c >= 4000000) break;
    if (c % 2 === 0) {
        sum = sum + c;}
    a = b;
    b = c;
}
console.log(`The sum of all even Fibonacci numbers under 4000000 is: ${sum}`);

 console.log("Sum of even Fibonacci numbers under 4 million is:", sum);
function largestPrimeFactor(n) {
  let factor = 2;
  while (factor * factor <= n) {
    if (n % factor == 0) {
      n /= factor;
    } else {
      factor++;
    }
  }
  return n;
}
const number = 600851475143;
console.log(largestPrimeFactor(number));
function facto(num) {
    let fac = 1;
    for (let i = num; i > 1; i--) {
        fac *= i;
    }
    console.log("Factorial is:", fac);
    let sum = 0;
    let temp = fac;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    console.log("Factorial digits sum:", sum);
}
facto(100);*/   





