"use strict";

// There are a bunch of errors in the below code that need to be fixed in order for it to run

// 1. 

const characters = [
  { id: 1, name: 'Luke Skywalker', age: 20 },
  { id: 2, name: 'Darth Vader', age: 50 },
  { id: 3, name: 'Princess Leia', age: 20 },
  { id: 4, name: "Han Solo", age: 33 }
]

// 2.
function listUsers(arr) {
  arr.forEach((user) => {
    // console.log(user.name)
  })
}
listUsers(characters);
// test function

// 3. 

// function getUserLastName(user) {
//   let lastName = user.split(" ")[0] 
//   return lastName
// }
function getUserLastName(user = '') {
  let lastName = user.split(" ").slice(-1)[0]

  return lastName;
}
// console.log(getUserLastName("Luke Skywalker"));
// test function

// 4. 

function checkValidUserName (arr) {
  arr.forEach(user => {
    if (!user.name) {
      console.log(user.name, "OK")
    } else {
      console.log(user.name, "BAD")
    } 
  })
}

// test function
checkValidUserName();