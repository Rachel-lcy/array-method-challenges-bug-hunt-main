"use strict";

// sample data
const users = [
  { id: 1, name: "Luke Skywalker", age: 20 },
  { id: 2, name: "Darth Vader", age: 50 },
  { id: 3, name: "Princess Leia", age: 20 },
  { id: 4, name: "Willimon Dick", age: 70 },
];

// 1. print out the names of each character
users.forEach(user => {
  console.log(user.name)
})

const names = users.map(user => (user.name))
console.log(names)
// 2.  print out the names if the character's age is less than 40

const names1 = users.filter((user) => 
  user.age < 40 ).map((user)=> user.name);
console.log(names1)

// 3. wrap iterative logic in a function that can take any array and print out the name of the characters

function nameChar (users){
  users.forEach((user) => (console.log(user.name)))
}
nameChar(users)
// 4. wrap logic in a function that takes an array and an age to test with the conditional

function  filterCharByAge (users, testAge){
  return users.filter((user) =>  user.age < testAge )
  .map((user) => user.name )
}

console.log(filterCharByAge(users, 25))
console.log(filterCharByAge(users, 51))


// 5. add an if check to your code that will return an error message if the object doesn't have a "name" property



// 6. test your error handling by breaking one of the arrays and passing it into the function
