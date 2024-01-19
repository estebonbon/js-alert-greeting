// Write your JavaScript below this line

var time = new Date().getHours();

//var greeting = "Good morning ";
//var noonGreeting = "Good afternoon ";
//var eveGreeting = "Good evening ";
//var bed = "Why are you still up? Go to bed ";

//var name = prompt("Type your name");

//if (time < 12) {
//alert(`${greeting + name}`);
//} else if (time <= 18) {
//alert(`${noonGreeting + name}`);
//} else if (time <= 22) {
//alert(`${eveGreeting + name}`);
//} else alert(`${bed + name}`);

//Correct Solution

var greeting = "Hello";
var name = "Timmy";

if (time < 12) {
  greeting = "Good morning ";
} else if (time <= 18) {
  greeting = "Good afternoon ";
} else if (time <= 22) {
  greeting = "Almost bed time eh ";
} else {
  greeting = "Why are you still up? Go to bed :/ ";
}

alert(greeting + name);
