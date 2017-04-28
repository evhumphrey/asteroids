function sum(){
  const args = Array.from(arguments)
  return args.reduce((s, n) => s + n, 0)
}

function sum(...args){
  return args.reduce((s, n) => s + n, 0)
}

// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`)
    return true
  }
}

Function.prototype.myBind = function(context, ...bindArgs){
  // myBind returns function below, that must be invoked again!!! :)
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
