/*const number = ["1", "2", "3", "4", "5"];

console.log(number[2]);
//get item from array

number.push("6", "7");
//add more number to the array

console.log(number);

*/
const player = {
  name: "Bee",
  points: 100,
  old: 20
};

const player2 = {
  name: "yee",
  points: 50,
  old: 22
};

console.log(player.name, player2.name);

/*const theGame = [player, player2]

console.log(theGame[0]);*/

player.name = "Lee";
//const는 수정이 되질 않지만 object의 안에 있는건 바꿀 수 있음

console.log(player.name, player2.name);

player.lastName = "min";
player.old = player.old + 15;

console.log(player);
