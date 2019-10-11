const getSleepHours = day => {
	day.toLowerCase()
		if (day = 'monday') {
			return 8
		}else if (day = 'tuesday'){
			return 6.5
		}else if (day = 'wednesday') {
			return 7
		}else if (day = 'thursday') {
			return 8
		}else if (day = 'friday') { 
			return 5
		}else if (day = 'saturday') {
			return 4
		}else if (day = 'sunday') {
			return 9
		}else console.log('please input a correct day of mthe week')
		
	}
const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday') 
	+ getSleepHours('wednesday') + getSleepHours('thursday') 
	+ getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 

const getIdealSleepHours = () => {
	let idealHours = (9 * 7) ;
	return idealHours
}

let calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours() ;
	idealSleepHours = getIdealSleepHours() ;
  console.log(`Your actual amount of sleep you are getting is ${actualSleepHours} hours`) ;
  console.log(`your ideal amount of sleep needed as per your figures is: ${idealSleepHours} hours`);

	if ( actualSleepHours == idealSleepHours) {
		console.log(' that is the perfect amount of sleep needed :)')
	}else if ( actualSleepHours < idealSleepHours ) {
		console.log('you need to get more sleep')
	}else if ( actualSleepHours > idealSleepHours ) {
		console.log('you get more sleep than what is actually needed')
	}else console.log('you have not given correct figures');

let hoursOverUnder = (idealSleepHours - actualSleepHours) ;
	return console.log(`you are in debt by ${hoursOverUnder} hours`)
	

}	


calculateSleepDebt()








		
