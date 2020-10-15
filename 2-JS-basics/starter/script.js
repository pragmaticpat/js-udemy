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

 /**
  * Boolean logic
  *
  * Interesting approach of using switch(true) { ... } as a hack on the switch statement for logic structures 
  * === is equality checker
  */

  /**
   * Falsy values undefined, null, 0, '', NaN
   * truthy values NOT falsy values
   */

   var height = 23;
   if(height || height === 0) {
       console.log('variable is defined');
   } else{
       console.log('variable is not defined')
   }
  
   /**
    * === is strict comparison
    * == is type comparison with type coercion
    */

    if(height === '23'){
        console.log('The == operator does type coercion')
    }

    /** Coding challenge 2 */
    
    var averageGameScoresForJohn = (15+120+13)/3;
    var averageGameScoresForMike = (15+120+103)/3;
    var averageGameScoresForMary = (15+120+10)/3;

    var winner;
    var winnerAverage;

    if(averageGameScoresForJohn === averageGameScoresForMary && averageGameScoresForJohn === averageGameScoresForMike){
        winner = 'All';
        winnerAverage = averageGameScoresForMary;
    } else if (averageGameScoresForJohn === averageGameScoresForMary && averageGameScoresForMary > averageGameScoresForMike){
        winner = 'John and Mary';
        winnerAverage = averageGameScoresForMary;
    } else if (averageGameScoresForJohn === averageGameScoresForMike && averageGameScoresForMike > averageGameScoresForMary){
        winner = 'John and Mike';
        winnerAverage = averageGameScoresForMike;
    } else if (averageGameScoresForMary === averageGameScoresForMike && averageGameScoresForMary > averageGameScoresForJohn){
        winner  ='Mary and Mike';
        winnerAverage = averageGameScoresForMike;
    } else if (averageGameScoresForJohn > averageGameScoresForMary && averageGameScoresForJohn > averageGameScoresForMike){
        winner = 'John';
        winnerAverage= averageGameScoresForJohn;
    } else if (averageGameScoresForMary > averageGameScoresForJohn && averageGameScoresForMary > averageGameScoresForMike){
        winner = 'Mary';
        winnerAverage = averageGameScoresForMary;
    } else if (averageGameScoresForMike > averageGameScoresForJohn && averageGameScoresForMike > averageGameScoresForMary){
        winner = 'Mike';
        winnerAverage = averageGameScoresForMike;
    }

    console.log( winner + '\'s team is the winner, with an average score of ' + winnerAverage);


