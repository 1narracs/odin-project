function fizzBuzz() {
  let answer = parseInt(prompt("Please enter a number: "));

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

function paperScissorsRock(){
  console.log("hello world!")
}