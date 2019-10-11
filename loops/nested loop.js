
// Write your code below
let bobsFollowers = ['jack', 'jill', 'ben', 'peter']
let tinasFollowers = ['jenny', 'jill', 'ben']
let mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++){
  	if (bobsFollowers[i] === tinasFollowers[j]) {
    	mutualFollowers.push(bobsFollowers[i]); 
      console.log(mutualFollowers)
   }
 }
};
