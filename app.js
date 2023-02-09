/* const playerName = "alicia";
const playerPoints = 121212;
const playerHandsome =  true;
const playerFat = "little bit";

const player=["alicia",1212,true,"little bit"];*/

const player = {
  name: "alicia",
  points: 10,
  fat: false
};

console.log(player);
console.log(player.name);

player.lastName = "patato";
player.points = player.points + 15;
console.log(player);