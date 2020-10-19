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

// /* 
// var year, yearJohn, yearMark;
// year = 2020;
// yearJohn = year - 23;
// yearMark = year - 24;

// var johnIsOlder = yearJohn < yearMark;
// console.log(johnIsOlder);
// console.log(typeof johnIsOlder);

// /**
//  * Operator precedence
//  */

//  //coding challenge
//  var markHeight = 1.25;
//  var markMass = 85;
//  var johnHeight = 1.15;
//  var johnMass = 92;

//  var johnBmi = johnMass / (johnHeight^2);
//  var markBmi = markMass / (markHeight^2);
//  var markHasHigherBmiThanJohn = markHeight > johnBmi;

//  console.log('John\'s BMI is ' + johnBmi);
//  console.log('Mark\'s BMI is ' + markBmi);
//  console.log('The fact that Mark has a higher BMI than John is ' + markHasHigherBmiThanJohn);

//  /**
//   * Boolean logic
//   *
//   * Interesting approach of using switch(true) { ... } as a hack on the switch statement for logic structures 
//   * === is equality checker
//   */

//   /**
//    * Falsy values undefined, null, 0, '', NaN
//    * truthy values NOT falsy values
//    */

//    var height = 23;
//    if(height || height === 0) {
//        console.log('variable is defined');
//    } else{
//        console.log('variable is not defined')
//    }
  
//    /**
//     * === is strict comparison
//     * == is type comparison with type coercion
//     */

//     if(height === '23'){
//         console.log('The == operator does type coercion')
//     }

//     /** Coding challenge 2 */
    
//     var averageForJohn = (15 + 120 + 13) / 3;
//     var averageForMike = (15 + 120 + 103) / 3;
//     var averageForMary = (15 + 120 + 10)/3;

//     var winner;
//     var winnerAverage;

//     if(averageForJohn === averageForMary && averageForJohn === averageForMike){
//         winner = 'All';
//         winnerAverage = averageForMary;
//     } else if (averageForJohn === averageForMary && averageForMary > averageForMike){
//         winner = 'John and Mary';
//         winnerAverage = averageForMary;
//     } else if (averageForJohn === averageForMike && averageForMike > averageForMary){
//         winner = 'John and Mike';
//         winnerAverage = averageForMike;
//     } else if (averageForMary === averageForMike && averageForMary > averageForJohn){
//         winner  ='Mary and Mike';
//         winnerAverage = averageForMike;
//     } else if (averageForJohn > averageForMary && averageForJohn > averageForMike){
//         winner = 'John';
//         winnerAverage= averageForJohn;
//     } else if (averageForMary > averageForJohn && averageForMary > averageForMike){
//         winner = 'Mary';
//         winnerAverage = averageForMary;
//     } else if (averageForMike > averageForJohn && averageForMike > averageForMary){
//         winner = 'Mike';
//         winnerAverage = averageForMike;
//     } else {
//         winner = 'Batman';
//         winnerAverage = 'NaNaNaNaNaNaNaNa';
//     }

//     console.log( winner + '\'s team is the winner, with an average score of ' + winnerAverage);

// /**
//  * Functions
//  */

//  function calculateAge(birthYear){
//      return 2020 - birthYear;
//  }

//  var age = calculateAge(1980);

//  console.log(age);

// function yearsToRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if(retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
    
// }

// yearsToRetirement(1990, 'John');
// yearsToRetirement(1950, 'James');

// /**
//  * function statements and expressions
//  */

//  //function expression
//  var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drivers a cab in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does ' + job + '.';
//     }
//  }

//  console.log(whatDoYouDo('teacher','John'));
//  console.log(whatDoYouDo('designer','Jane'));
//  console.log(whatDoYouDo('retired','Mark'));


//  /**
//   * Arrays
//   * 
//   */

//   var names = ['John', 'Mark', 'Jane'];
//   var years = new Array(1940,1950,2960);

//   console.log(names[0]);

//   /**
//    * coding challenge 3
//    * 
//    */
  
//   function calculateTip(billAmount){
//       switch (true){
//           case billAmount < 50:
//               return billAmount * .2;
//         case billAmount >=50 && billAmount <= 200:
//               return billAmount * .15;
//             default:
//                 return billAmount * .1;
//        }
//    }

//    var bills = [124, 48, 268];
//    var tips = new Array(
//     calculateTip(bills[0]),
//     calculateTip(bills[1]),
//     calculateTip(bills[2])
//     );

//     var totals = new Array(
//         bills[0] + tips[0],
//         bills[1] + tips[1],
//         bills[2] + tips[2],
//     );

// console.log(tips);
// console.log(totals);

/**
 * Objects and properties
 */

//  object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','John','Bob',';Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['firstName']);
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1980;
// jane['lastName'] = 'Smith';
// console.log(jane);

/**
 * objects and methods
 */
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','John','Bob',';Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge:  function(){
//         this.age = 2020 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

/**
 * coding challenge 3
 */

//  var mark = {
//      fullName: 'Mark Smith',
//      mass: 100,
//      height: 1.90,
//      calcBMI: function(){
//          this.bmi = this.mass / this.height^2;
//          return this.bmi;
//      }
//  }

//  var john = {
//     fullName: 'John Smith',
//     mass: 190,
//     height: 1.75,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height^2;
//         return this.bmi;
//     }
// }

// var name, bmi;
// if(mark.calcBMI() > john.calcBMI()){
//     console.log(mark.fullName + ' has the higher BMI of ' + mark.bmi);
// } else if(john.bmi > mark.bmi){
//     console.log(john.fullName + ' has the higher BMI of ' + john.bmi);
// } else {
//     console.log('They both have the same BMI of ' + mark.bmi);
// }

// console.log(mark, john);

/**
 * Loops and iteration
 */

//  for(var i = 0; i < 10; i++){
//      console.log(i);
//  }

//  var john = ['John', 'Smith', 1990, 'designer','blue'];
// //  var i = 0;
// //  while(i < john.length){
// //      if(typeof john[i] !== 'string') continue;
// //      console.log(john[i++]);
// //  }

//  for(var i = 0; i < john.length; i++){
//      if(typeof john[i] !== 'string') continue;
//      console.log(john[i]);
//  }


//  for(var i = john.length-1; i >= 0; i--){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

/** Coding Challenge 5 */

var tipCalculatorJohn = {
    familyName: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calculateTips: function(){
        var tip = 0;
        for(var i = 0; i < this.bills.length; i++){
            if(this.bills[i] < 50) { 
                tip = .2; 
            } else if(this.bills[i] >= 50 && this.bills[i] <=200 ) { 
                tip = .15; 
            } else { tip = .1; }

            this.tips[i] = tip * this.bills[i];
            this.totals[i] = this.bills[i] + this.tips[i];
        }

        console.log(this.bills, this.tips, this.totals);
    }
}

tipCalculatorJohn.calculateTips();

var tipCalculatorMark = {
    familyName: 'Mark',
    bills: [77, 475, 110, 45],
    tips: [],
    totals: [],
    calculateTips: function(){
        var tip = 0;
        for(var i = 0; i < this.bills.length; i++){
            if(this.bills[i] < 100) { 
                tip = .2; 
            } else if(this.bills[i] >= 100 && this.bills[i] <= 300) { 
                tip = .15; 
            } else { tip = .25; }

            this.tips[i] = tip * this.bills[i];
            this.totals[i] = this.bills[i] + this.tips[i];
        }

        console.log(this.bills, this.tips, this.totals);
    }
}

tipCalculatorMark.calculateTips();

// Extra Credit

function getAverageTips(tipsArray){
    var sum = 0;
    for (var i = 0; i < tipsArray.length; i++){
        sum += tipsArray[i];
    }

    return sum / tipsArray.length;
}

var averageTipsForJohn = getAverageTips(tipCalculatorJohn.tips);
var averageTipsForMark = getAverageTips(tipCalculatorMark.tips);

console.log(averageTipsForJohn, averageTipsForMark);

if(averageTipsForJohn > averageTipsForMark) {
    console.log( 'John\'s family has higher average tip of ' + averageTipsForJohn);
} else if (averageTipsForMark > averageTipsForJohn){
    console.log( 'Mark\'s family has higher average tip of ' + averageTipsForMark);
} else {
    console.log('It\s a tie! Both families averaged tips of ' + averageTipsForJohn);
}
