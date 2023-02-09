const age = parseInt(prompt("How old are you?"));

console.log();

if (isNaN(age)) {
  console.log("Please write number");
} else if (age < 18) {
  console.log("Your too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}