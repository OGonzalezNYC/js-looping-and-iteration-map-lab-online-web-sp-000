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

// const drivers = [
//         { name: 'Bobby', hometown: 'Pittsburgh' },
//         { name: 'Sammy', hometown: 'New York' },
//         { name: 'Sally', hometown: 'Cleveland' },
//         { name: 'Annette', hometown: 'Los Angeles' },
//         { name: 'Bobby', hometown: 'Tampa Bay' }
//       ];

//       expect(attributesToPhrase(drivers)).to.eql([
//         'Bobby is from Pittsburgh',
//         'Sammy is from New York',
//         'Sally is from Cleveland',
//         'Annette is from Los Angeles',
//         'Bobby is from Tampa Bay'
//       ]);

function attributesToPhrase(array) {
  
}