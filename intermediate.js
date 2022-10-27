//MON: LARGEST NUM IN ARRAYS
// function largestOfFour(arr) {
//     // You can do this!
//     return arr;
//   }
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//   //Returns [5,27,39,1001]

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

arr1 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
newArr = [];

function largestOfFour(arr){

    for(i=0; i< arr.length; i++){
        let max = arr[i][0]; //错在max没defined
        //to find the max num of an array
        for(j=0; j< arr[i].length; j++){

            if(arr[i][j]>arr[i][j+1]){
                // let max = arr[i][j]; //错在max没defined
                max = arr[i][j]; 
            }
            
            newArr[i] = max
            // newArr = newArr.push(max); //错在newArr.push is not a function - push method需要再了解
        }       
    }
    return newArr
}

console.log(largestOfFour(arr1));

//你到底是要几个loop？？--逻辑倒是大体对的

//答案
const array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour(arr) {
  let result = []

  for (let i = 0; i < array.length; i++) {

    let max = array[i][0]
    for (let x = 1; x < array[i].length; x++) {
      if (array[i][x] > max) {
        max = array[i][x]
      }
    }
    result[i] = max
  }
  return result;
}
console.log(largestOfFour(array));





//TUE: FIND THE LONGEST WORD IN A STR
//Return the length of the longest word in the provided sentence.
//Your response should be a number. For these algorithms you are allowed to use the split() method.
//findLongestWord("May the force be with you") should return 5.

//turn string into an arr, loop through the arr to find the one with the longest length

function findLongestWord(str){
    let arr = str.split(' ');

    let longestElement = arr[0].length;
    for(i=1; i<arr.length-1; i++){
        if(arr[i].length > longestElement){
            longestElement = arr[i].length;
        }
    }

    return longestElement
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//答案
const string = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str){
split = string.split(" ")

let result = 0
for( let i=0 ; i<split.length; i++){

result = (split[i].length > result) ? split[i].length : result ;

}
return result
}

const l =  findLongestWord(string) 
console.log(l) //should return 6.


//WED: TITLE CASE A SENTENCE
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For this algorithm, you can use the split() method.
//split() means, turn the str to an arr

//function titleCase(str),
//inside the function, first turn it into an arr -> loop through the arr 
//-> inside the loop, access to each index value to check the case, -> if statement
//then -> return the newArr into a str using arr.join() method
//更正错误，都get access to each index value了应该是loop 不是if

// function titleCase(str){
//     let arr = str.split(' ');

//     for(i=0;i<arr.length;i++){

//       if(arr[i][0] == arr[i].toLowerCase()[0]){
//         arr[i][0] = arr[i].toUpperCase()[0];
//       } 

//       arr[i].substring(1).toLowerCase();
//     }
//     result = arr.join(' ');
//     return result
// }
// console.log(titleCase("I'm a little tea pot"))    //-> wrong

//error type: The "Cannot read property 'toLowerCase' of undefined" error occurs when calling the toLowerCase() method on an undefined value. To solve the error, initialize the value to an empty string or make sure to only call the toLowerCase method on strings.


//答案
function titleCase(str){
  let arr = str.split(" ");
  let word ="";
  let result = [];
  for(let i= 0; i<arr.length; i++){
      word += arr[i][0].toUpperCase();
      for(let j = 1; j<arr[i].length; j++){
        word += arr[i][j].toLowerCase();
      }
      result[i] = word;
      word = "";
  }
  
  result = result.join(" ");
  return result
  
}

console.log(titleCase("I'm a little tea pot"))

//另一个答案 map & slice()
const sentence = "I'm a little tea pot"

function titleCase(str){
let capital = str.split(" ")

let result = capital.map(capitalLetter => capitalLetter[0].toUpperCase()+ capitalLetter.toLowerCase().slice(1, capitalLetter.length))

result =  result.join(" ")
return result

}

let x = titleCase(sentence) 
console.log(x)





//THUR: SUM ALL NUMBERS IN A RANGE
//let sum = ( arr[0] + arr[1] ) *  itemsNum / 2

function sumAll(arr){

  let itemsNum;
  let sum;

  if(arr[0] > arr[1]){itemsNum = arr[0] - arr[1] + 1} else {itemsNum = arr[1] - arr[0] + 1}
  
  sum = ( arr[0] + arr[1] ) * itemsNum / 2;

  return sum
}

console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));


//FRI: FIBONACCI SEQUENCE