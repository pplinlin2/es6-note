'use strict'
// Arrow function
function circleArea1(r) {
  var PI = 3.14;
  return PI * r * r;
}

let circleArea2 = (r) => {
  const PI = 3.14;
  return PI * r * r;
};

let circleArea = r => 3.14 * r * r;

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea(7));

// Template literals
let name = 'J';

console.log('My name is ' + name + '. Nice to meet you.');
console.log(`My name is ${name}. Nice to meet you`);

// Spread operator
let addNumbers = (a, b, c) => {
  console.log(a + b + c);
}

var nums = [3, 4, 5];
addNumbers(nums[0], nums[1], nums[2]);
addNumbers(...nums);

var meats = ['bacon', 'ham'];
var food = ['apple', ...meats, 'kiwi', 'rice'];
console.log(food)

// Classes
class Person{
  constructor(name, age, weight){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log(`My name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

let J = new Person('J', 19);
J.sayHello();

// Inheritance
class Worker extends Person{
  constructor(name, age, job){
    super(name, age)
    this.job = job
  }

  sayHello(){
    super.sayHello()
    console.log(`Futhermore, my job is ${this.job}`)
  }
}

let A = new Worker('A', 18, 'Assistance');
A.sayHello()

// Generators
function* sampleGenerator(){
  yield 'apples';
  yield 'bacon';
  console.log('ok, this is the line before corn');
  yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next());
console.log(sample.next());
console.log(sample.next());
console.log(sample.next());
