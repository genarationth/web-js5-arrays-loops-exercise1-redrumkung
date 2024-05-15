let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

const myAlphabetLength = (array) => {
  console.log(array.length);
};

myAlphabetLength(myAlphabet);

const Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
Planets.forEach(function (members, index, array) {
  console.log(index, members, array);
});

const myArr = [1, 2, "One", true];
myArr.forEach(function (members, index, array) {
  console.log(index, members, array);
});
