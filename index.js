let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

const myAlphabetLength = (array) => {
  console.log(array.length);
};

myAlphabetLength(myAlphabet);

const Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
Planets.forEach(function (members, index, test) {
  console.log(members, index, test);
});

const myArr = [1, 2, "One", true];
myArr.forEach(function (members, index) {
  console.log(members, index);
});
