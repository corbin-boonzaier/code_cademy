// The scope of `random` is too loose 

let name = ''
let name2 = 'Warren'
const getRandEvent = name => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = (name ,event) => {
    let days = '' ;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  if (name) {
  console.log(`${name}'s event is: ${event}`)
  }else if (name2){
  console.log(`${name2}'s event is: ${event}`) 
  }
};

const logTime = (name ,days) => {
 if (name) {
  console.log(`${name}'s time to train is: ${days} days`)
 } else if (name2){
  console.log(`${name2}'s time to train is: ${days} days`) 
 }
};

const event = getRandEvent(name);
const days = getTrainingDays(name,event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent(name2);
const days2 = getTrainingDays(name2,event2);


logEvent(name2, event2);
logTime(name2, days2);

