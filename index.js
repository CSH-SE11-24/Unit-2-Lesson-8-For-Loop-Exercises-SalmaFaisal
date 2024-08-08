// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.
for(let i = 1; i<=10;i++){
  console.log(i)
}




// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.

for(let i = 15; i<=40; i+=2){
  console.log(i)
}
  





// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.

let sum = 0
for(i =10;i<=20;i++){
  sum=sum+i
}



// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.
let numbers = [1,2,3,4,5]
for(let i =1;i<= numbers.length; i++)
  console.log(i)



// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.

let result = 0
let Array = [2,5,7,8,4,10]
for (let i = 0; i<=Array.length;i++)
     {
  result=Array[i]+result
  console.log(result)
     }




// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2

let num2= [5,1,2,5]
let targetNum = 5
let count = 0
for(let i = 0; i < numbers.length; i++){
  if(numbers[i]===targetNum){
    count++
  }
}
console.log(count)



