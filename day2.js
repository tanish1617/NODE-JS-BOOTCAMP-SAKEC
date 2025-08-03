console.log("DAY 2!!");

/*const myObj = {
    "name" : "Tanish",
    "age" : "19",
    "isStudent" :true,
    "hobbies" : ["basketball","athletics"],
    "address" : {
        "city" : "Mumbai",
        "Zipcode" : "400001"
    }
}
console.log(`Name:${myObj.name}`);
console.log(`1st Hobby:${myObj.hobbies[0]}`);
console.log(`Zipcode:${myObj.address.Zipcode}`);

const numb = [];
let sum = 0;
for(let i  = 0;i<101;i++) {
    numb[i] = i*3;// for numbers 1 to 100 dont multiply i by 3
    if(i%5==0){
           console.log(numb[i]);
           sum = sum + i; 
    }
}
console.log(`Sum is : ${numb}`);

//alternative method
  a = [2,3,4,5,6,7,8,9];
for(let i  = 0;i<101;i++)a.push(i)
    const result = a
    .map(x=>x*3)
    .filter(x=>x%5==0)
    .reduce((a,x)=>a+x)
function abc(x){return x*3} 
console.log(result)

let a = [3, 4, -5, -6, 7];
const sum = a.reduce((total, x) => {
  if (x > 0) {
    return total + x;
  } else {
    return total;
  }
}, 0);
console.log(sum);*/

const users = [
    {name : "Alice",age : 25},
    {name : "Bob",age : 30},
    {name : "Charlie",age : 25}
];
const totalAge = users.reduce((sum,users)=> sum + users.age,0);
const avgAge = totalAge/users.length;
console.log(`The average age is: ${avgAge}`);
