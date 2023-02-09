// console.log("Hello my name is alicia");
// console.log("Hello my name is ja");
// console.log("Hello my name is yun");
// console.log("Hello my name is choi");

function sayHello(yourName, age) {
  console.log("Hello my name is " + yourName + " and I'm " + age);
}

sayHello("jayun", 19);
sayHello("nico", 35);

function plus(a, b) {
  console.log(a + b);
}

plus(1, 5); // a=1, b=5

const player = {
  name: "alicia",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

player.sayHello("nico");