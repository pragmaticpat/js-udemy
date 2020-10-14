/*
console.log('Hello world!!!')

var firstName = 'Patrick';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);


/*
variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

//type coercion
var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' ' + job + ' ' + isMarried);

//var mutation
age = 'twenty eight';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/* Math operators */


var year, yearJohn, yearMark;
year = 2020;
yearJohn = year - 23;
yearMark = year - 24;

var johnIsOlder = yearJohn < yearMark;
console.log(johnIsOlder);
console.log(typeof johnIsOlder);

/**
 * Operator precedence
 */

 //coding challenge
 var markHeight = 1.25;
 var markMass = 85;
 var johnHeight = 1.15;
 var johnMass = 92;

 var johnBmi = johnMass / (johnHeight^2);
 var markBmi = markMass / (markHeight^2);
 var markHasHigherBmiThanJohn = markHeight > johnBmi;

 console.log('John\'s BMI is ' + johnBmi);
 console.log('Mark\'s BMI is ' + markBmi);
 console.log('The fact that Mark has a higher BMI than John is ' + markHasHigherBmiThanJohn);