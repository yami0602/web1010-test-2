// Create a trainCapacity variable and set it to 40. Then create a numPassengers
// variable and store the number 4 in it. Finally, log the following message to
// the console:
//
//    4 passengers present with 36 seats remaining.
//
// You must replace the numbers in the string above with variables. The number
// 36 must be calculated using math and two variables.

const trainCapacity = 40
const numPassengers = 4

const occupaancy = ` ${numPassengers} passengers present with ${trainCapacity-numPassengers} seats remaining.`
console.log(occupaancy)