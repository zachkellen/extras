// // generateCoinChange(input)
// // input is an integer representing an amount of money
// // output is an object representing the most optimal
// // (i.e. fewest coins) way to represent that amount
// // with standard U.S. coins
// // if the input is 74 cents, the output would be:
// // {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// // if the input is 109 cents, the output would be:
// // {quarters: 4, dimes: 0, nickels: 1, pennies: 4}

function generateCoinChange(input) {
    var quarterCount = 0;
    var dimeCount = 0;
    var nickelCount = 0;
    var pennyCount = 0;
    var finalOutput = {};
    while(input > 0) {
        while(input >= 25) {
            quarterCount++;
            input -= 25;
        }
        finalOutput["quarters"] = quarterCount;
        while(input >= 10) {
            dimeCount++;
            input -= 10;
        }
        finalOutput["dimes"] = dimeCount;
        while(input >= 5) {
            nickelCount++;
            input -= 5;
        }
        finalOutput["nickels"] = nickelCount;
        while(input >= 1) {
            pennyCount++;
            input -= 1;
        }
        finalOutput["pennies"] = pennyCount;
    }
    // console.log(" Quarters: " + quarterCount + " Dimes: " + dimeCount + " Nickels: " + nickelCount + " Pennies: " + pennyCount)
    return finalOutput
}

// // try out your own cases!
// // generateCoinChange(74)
console.log(generateCoinChange(115))
console.log(generateCoinChange(25))
console.log(generateCoinChange(75))
console.log(generateCoinChange(120))

// generateCoinChangeWithGivenValues(input, values)
// input is an integer representing an amount of money
// values is an array of arrays - each array represents a
// denomination of currency (string) and its value (integer)
// (a denomination of 1 will always be present)
// that array is in order of denomination
// the output is an object representing the most optimal
// way to represent that amount given the denominations
// if the input is 127 cents, and the values are:
// [ ['metadime', 15],
//  ['supernickel', 6]
//  ['very regular penny', 1]]
// the output would be:
// {metadimes: 8, supernickels: 1, very regular pennys: 1}
// (note the pluralization)
// if the input was 127, but the values were:
// [ ['halfquarter', 12],
//  ['greater nickel', 8],
//  ['lesser dime', 3]
//  ['just-a-penny', 1]]
// the output would be:
// {halfquarters: 10, greater nickels: 0, lesser dimes: 2, just-a-pennys: 0}
// if the input was 127, but the values were:
// [ ['half-dollar', 50],
//  ['dime', 10],
//  ['nickel', 5]
//  ['penny', 1]]
// the output would be:
// {'half-dollars': 2, 'dimes': 2, 'nickels': 1, 'pennys': 2}
// (these values -could- be an object, a set of key-value pairs,
// but I want to get you used to the concept of arrays within arrays
// and accessing that data within them)
//
// bonus: what would you do if we couldn't guarantee a denomination of 1
// being present? there are a few different answers, none strictly 'correct'

function generateCoinChangeWithGivenValues(input, values) {
    var finalOutput = {};
    for(var i = 0; i < values.length - 1; i++) {
        while(input > 0) {
            // console.log(values);
            var coinCount = 0;
            while(input >= values[i][1]) {
                coinCount++;
                input -= values[i][1];
                // console.log(input);
                // console.log(values);
            }
            finalOutput[values[i][0]] = coinCount;
        }
    }
    return finalOutput
}
//     while(input > 0) {
//         while(input >= values[0][1]) {
//             coinCount1++;
//             input -= values[0][1];
//         }
//         finalOutput[values[0][0]] = coinCount1;
//         while(input >= values[1][1]) {
//             coinCount2++;
//             input -= values[1][1];
//         }
//         finalOutput[values[1][0]] = coinCount2;
//         while(input >= 5) {
//             nickelCount++;
//             input -= 5;
//         }
//         finalOutput["Nickels"] = nickelCount;
//         while(input >= 1) {
//             pennyCount++;
//             input -= 1;
//         }
//         finalOutput["Pennies"] = pennyCount;
//     }
//     // console.log(" Quarters: " + quarterCount + " Dimes: " + dimeCount + " Nickels: " + nickelCount + " Pennies: " + pennyCount)
//     return finalOutput
// }


// generateCoinChangeWithGivenValues(52, [['halfquarter', 12], ['greater nickel', 8], ['lesser dime', 3], ['just-a-penny', 1]]);