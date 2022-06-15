// first bullet point
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

console.log(ages[ages.length - 1] - ages.find(Number));

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(65);
console.log(ages[ages.length - 1] - ages.find(Number));

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let totalAge = 0;
for(let i = 0; i < ages.length; i++){
    totalAge = totalAge + ages[i];
} 
let averageAge = totalAge / ages.length;
console.log(averageAge);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let totalNames = 0;
for (let i = 0; i < names.length; i++){
    totalNames += names[i].length;
}
let averageNameLength = totalNames / names.length;
console.log(averageNameLength);

 // Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let namesTogether = ''
 for (let i = 0; i < names.length; i++){
    namesTogether = namesTogether + names[i] + ' ';
 } 
 console.log(namesTogether);

 // How do you access the last element of any array?
 // use arrayName[arrayName.length - 1] example
 console.log(names[names.length - 1])

 // How do you access the first element of any array?
// use arrayName.find(Element) example
console.log(names.find(String))

 // Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []
for (let i = 0; i < names.length; i++){
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let lengthsTotal = 0;
for (let i = 0; i < nameLengths.length; i++){
    lengthsTotal += nameLengths[i];
}
console.log(lengthsTotal);

//  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordRepeater(word, n) {
    let total = ''
    for (let i = 0; i < n; i++){
        total += word;
    } return total;
};
console.log(wordRepeater('hello', 6));

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullname(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullname('Mario', 'Payan'))

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sizeChecker(x){
    let total = 0;
    for(let i = 0; i < x.length; i++){
        total = total + x[i];
    }
    if (total > 100){
        return true;
    }
    return false;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array
function averageChecker(x){
    let total = 0;
   
    for(let i = 0; i < x.length; i++){
        total += x[i];
    } return total / x.length
}

//	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function sizeComparer(array1, array2){
    let total1 = 0;
    let total2 = 0;
    for(let i = 0; i < array1.length; i++){
        total1 += array1[i];
    }  total1 /= array1.length;
    for(let i = 0; i < array2.length; i++){
        total2 += array2[i];
    }  total2 /= array2.length;
    if (total1 > total2){
        return true;
    }
    return false;
}
let testArray1 = [4, 4, 32, 5, 2]
let testArray2 = [323, 4234, 423, 345 ]
console.log(sizeComparer(testArray2, testArray1))

// Also this will work

function sizeComparer2(array1, array2){
    let total1 = 0;
    let total2 = 0;
    total1 = averageChecker(array1)
    total2 = averageChecker(array2)
    if (total1 > total2) {
        return true;
    }
    return false;
} 

console.log(sizeComparer2(testArray1, testArray2))

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50) {
        return true ;
    }
    return false;
}

console.log(willBuyDrink(true, 45.20))
 
// Dice that will allow you to choose how many sides of dice and also how many dice to roll

function dice(size, amount){
    let result 
    let roll = []
    for (let i = 0; i < amount; i++){
    result = Math.floor(Math.random() * size) + 1
    roll.push(result)

} return roll.toString()
}

// Can i put a function in a function to make it runn 4 sepearte times
 
console.log(dice(20,4))