// "use strict";

let hasDriverLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I Can Drive :");

const jonas = {
  firstName: "jonas",
  lastName: "Schemedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last'+nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName,age, job, and friends"
);
// console.log(jonas[interestedIn]);
// console.log(jonas);
// console.log(interestedIn);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName,age,job,and friend"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} Friends, and his best friend is called ${jonas.friends[0]}`
);
