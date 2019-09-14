let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = true;
let earlyStart = '9.30am' ;
let lateStart = '11.00am' ;
let youthRacer = '12.30am' ;

let runnersAge = 18 ;


let andultAndEarly = '' ;
if (earlyReg === true && runnersAge > 18) {
    (raceNumber + 1000) && (console.log('race number +1000 as you registered early')) 
}else if (runnersAge === 18) {
console.log('please report to the registration desk.')
}else if (runnersAge < 18) {
console.log('you are a youth, race number +1000 and standard starting time ')
}else console.log('number below 1000 as you are an adult and registered late.')


let ageTime = '' ;
if (runnersAge > 18 && earlyReg === true) {
   console.log(`your time is ${earlyStart} and your number is ${raceNumber + 1000}`)  
} else if (runnersAge < 18 ) {
    console.log(`your time is ${youthRacer} and your race number is : ${raceNumber}`) 
} else if (runnersAge > 18 && earlyReg != true) {
  console.log(`your time is ${lateStart} and your number is ${raceNumber}`)
} else console.log('THANK YOU')




