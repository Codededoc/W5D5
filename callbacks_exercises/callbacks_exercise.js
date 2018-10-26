// // window.setInterval(function () {
// //   console.log("Whee! I'm in a loop but still working!");
// // }, 1000);
// //
// // console.log("Timer set!");
//
// class Clock {
//   constructor () {
//     // 1. Create a Date object.
//     let date = new Date();
// // 2. Store the hours, minutes, and seconds.
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
// // 3. Call printTime.
//     this.printTime();
// // 4. Schedule the tick at 1 second intervals.
//     // let that = this;
//     // window.setInterval(function () {
//     //   that._tick();
//     // }, 1000);
//     setInterval(this._tick.bind(this), 1000);
//   }
//
//   printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }
//
//   _tick() {
//     this.seconds++;
//     if (this.seconds === 60) {
//       this.seconds = 0;
//       this.minutes++;
//     }
//     if (this.minutes === 60) {
//       this.minutes = 0;
//       this.hours++;
//     }
//     if (this.hours === 24) {
//       this.hours = 0;
//     }
//
//     this.printTime();
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   }
// }
//
//   const clock = new Clock();
//   clock.printTime();

// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// // reader.question("Can you see this question?", answer => {
// //   console.log(`Thank you for your answer: ${answer}`);
// //   reader.close();
// // });
//
// function addNumbers(sum, numsLeft, completionCallback) {
//   if(numsLeft > 0) {
//     reader.question("give me a number?", answer => {
//       const num = parseInt(answer, 10);
//       console.log(sum + num);
//       sum += num;
//       numsLeft--;
//       addNumbers(sum, numsLeft, completionCallback);
//     });
//   }
//   if (numsLeft === 0) {
//     completionCallback(sum);
//   }
// }
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, answer => {
    if (answer === "yes") {
      callback(true);
    } else if (answer === "no") {
      callback(false);
    } else {
      console.log("Please answer yes or no");
      askIfGreaterThan(el1, el2, callback);
    }
  });
}
// Prompt user to tell us whether el1 > el2; pass true back to the
// callback if true; else false.

const response = function (str) {
  if(str === "yes") {
    return true;
  } else {
    return false;
  }
};
askIfGreaterThan(6, 4, response);

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1) {
    if (askIfGreaterThan(arr[i], arr[i+1], helper_func)) {

    }
  }
}

function helper_func (isGreaterThan) {
  if (isGreaterThan){
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];

  } else {

  }
}
// Do an "async loop":
// 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//    know whether any swap was made.
// 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//    continue the inner loop. You'll want to increment i for the
//    next call, and possibly switch madeAnySwaps if you did swap.


// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
//
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//   }
//
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }
//
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// Write your own myBind(context) method. Add it to Function.prototype. You'll want to:
//
// Return an arrow function.
// The arrow function captures this and context.
// In the anonymous function, call Function.prototype.apply on this, passing the context.
// Assume the method you're binding doesn't take any arguments; we'll see tomorrow how to use the rest and spread operators to fix this.
//
// How would you test your "bind" method out? Try out this example code:
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
