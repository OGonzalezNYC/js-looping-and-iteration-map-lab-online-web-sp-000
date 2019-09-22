// Code your solution in this file.
// function lowerCaseDrivers(driversArray) {
//   return driversArray.map(function(driverName) {
//     return driverName.toLowerCase()
//   })
// }

// function nameToAttributes(driversArray) {
//   return driversArray.map(function(fullName) {
//     return {firstName: fullName.split(" ")[0], lastName: fullName.split(" ")[1]}
//   })
// }

// function attributesToPhrase(driversArray) {
//   return driversArray.map(function(object) {
//     return `${object.name} is from ${object.hometown}`
//   })
// }
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  })
}

// const drivers = [
//         'Bobby Smith',
//         'Sammy Watkins',
//         'Sally Jenkins',
//         'Annette Sawyer',
//         'Sarah Hucklebee',
//         'bobby ridge'
//          ]

// [
//         { firstName: 'Bobby', lastName: 'Smith' },
//         { firstName: 'Sammy', lastName: 'Watkins' },
//         { firstName: 'Sally', lastName: 'Jenkins' },
//         { firstName: 'Annette', lastName: 'Sawyer' },
//         { firstName: 'Sarah', lastName: 'Hucklebee' },
//         { firstName: 'bobby', lastName: 'ridge' }
//       ]

function nameToAttributes(array) {
  array.map(function(element) {
     let newElement = {};
     let i = 0;
     while (i < element.length) {
     if (i < indexOf(" ")) {
       newElement.firstName.push(element[i]);
       return newElement;
     }
     if (indexOf(element[i]) > indexOf(" ")) {
       newElement[i].lastName.push(element[i]);
       return newElement;
     }
     i++;
   }
  });
}