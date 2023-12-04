  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

nums = [0, 1, 2, 3, 4]

let sums = nums.reduce((acc,curr)=>{

  console.log(
  'Accumlator:', acc,
  'Currrent value:', curr,
  'Total:', acc + curr
  )
return acc + curr

})

console.log(sums)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalyrsExperience =teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,0);


console.log(totalyrsExperience)


// Grouping by a property, and totaling it too

let yrsExperienceByProfession= teamMembers.reduce((acc, curr) =>{


let key = curr.profession
 if (!acc[key]){
 acc[key] = curr.yrsExperience}
 else
 {
  acc[key] += curr.yrsExperience
 }
return acc
}, {});

console.log(yrsExperienceByProfession)