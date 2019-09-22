// Code your solution in this file.

// function nameToAttributes(driversArray) {
//   return driversArray.map(function(fullName) {
//     return {firstName: fullName.split(" ")[0], lastName: fullName.split(" ")[1]}
//   })
// }

function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  })
}

function nameToAttributes(array) {
  return array.map(function(element) {
     let newElement = {firstName: "", lastName: ""};
     let i = 0;
     while (i < element.length) {
     if (i < element.indexOf(" ")) {
       newElement.firstName = newElement.firstName + element[i];
     }
     if (i > element.indexOf(" ")) {
       newElement.lastName = newElement.lastName + element[i];
     }
     i++;
   } return newElement;
  });
}

function attributesToPhrase(array) {
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`
  })
}