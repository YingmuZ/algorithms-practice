//THREE STEPS:
//1- draw a diagram to make the problem more concrete
//2- write pseudocode to explain what each function or loop does
//3- finally start coding

//t-diagram (?)


//MONDAY: JS BASIC
//1. print 1-135
let result1 = [];
for(let i = 1; i < 136; i++){
    result1.push(i);
}
console.log(result1);
//turn array into string
console.log(result1.toString());

//2. print odd numbers 1-135
let result2 = [];
for(let i = 1; i <136; i++){
    if(i % 2 != 0){
        result2.push(i);
    }
}
console.log(result2.toString());

//3. sum of printed numbers
for (i = 0; i< 136; i++){
    let y = i * (i+1) / 2;
    console.log('number is: '+ i + ' sum: ' + y);
}

//4. print the elements of an array
x = [1, 4, 2, 12]; //iterate through the array
for (i = 0; i< x.length; i++){
    console.log(x[i]);
}

//5. find max
x = [5, -3, 0, 7, 9, 10, 2, 100];  //e.g. 
maxNum = x[0];
for(i = 1; i < x.length; i ++){
    if(x[i] > maxNum){
        maxNum = x[i];
    }
}
console.log(maxNum);

//6. get average
//sum of an array [loop through the array to get each num], then "/ arr.length"
x = [1, 2, 3, 4];
let sum = 0;
for(i = 0; i < x.length; i ++){
    sum += x[i]
}
console.log(sum / x.length);

//foreach的话*****
x = [1, 2, 3, 4];
let sum_ = 0;
x.forEach(i => {
    sum_ += i
});
console.log(sum_ / x.length);


//7. eliminate the negatives
//loop through the array, if
x = [2, -1, 4, -3];
for (i = 0; i< x.length; i ++){
    if(x[i] < 0){
        x[i] = 0;
    }
}
console.log(x);

//8. number to string
x = [2, -1, 4, -3];
for (i = 0; i< x.length; i ++){
    if(x[i] < 0){
        x[i] = 'string';
    }
}
console.log(x);



//TUE: JS INTERMEDIATE
//1. addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 
addition = [];
for (i = 200; i < 2701; i ++){
    if(i % 3 == 0 && i % 5 != 0){
        addition.push(i);
    } else if (i % 3 != 0 && i % 5 == 0){
        addition.push(i);
    }
}
console.log(addition);

//2. shift the values
x = [2, 1, 6, 4, -7, 8, 9];
xx = [];
for(i = 0; i< x.length; i ++){
    // x[i] = xx[x.length-i-1];
    xx.push(x[x.length-i-1]);
} 
console.log(xx);

//3. FizzBuzz
//return an array
x = [];
for(i = 1; i < 136; i++){
    if(i % 3 != 0 && i % 5 != 0){
        x.push(i);
    } else if (i % 3 == 0 && i % 5 != 0){
        x.push('fizz');
    } else if (i % 3 != 0 && i % 5 == 0){
        x.push('buzz');
    } else if(i % 3 == 0 && i % 5 == 0){
        x.push('fizzbuzz')
    }
}
console.log(x);


//4. fibonacci (see other file)

//5. remove the negative
x = [1, -2, 4, -1, -5, 6]; //e.g. [1. 4, 6]
xx = [];
//still return an array, "splice()" to remove
//https://sentry.io/answers/remove-specific-item-from-array/#:~:text=Combining%20indexOf()%20and%20splice,element%20at%20the%20returned%20index.

for(i = 0; i < x.length; i ++){
    if(x[i] < 0){
       xx = x.splice(i, i);
    }
}
console.log(x);

//6. communist censorship

//output = ['Man', 'I','Love','The','Matrix','*******']
//make your algorithm work for any word of your choice

//string character access, 'cat'[1] // gives value "a"
//replace the character of the string ___ string.replace() does not rly work

x = ['Man', 'I','Love','The','Matrix','Program']
// console.log(typeof(x[5])); //string
x[5] = x[5].replace('Program', '*******');
console.log(x)


//答案：（重要的是事前想清楚要loop什么！）
let stringArray = ['Man', 'I','Love','The','Matrix','Program']
const selectTheWord = stringArray[5].length
// console.log(stringArray[5].length); //7
// stringArray.splice(5,1)
stringArray[5]=""; //reassign the element of the array as empty
​
for(i=0; i<selectTheWord; i++){
    stringArray[5]= stringArray[5]+"*" 
}
console.log(stringArray);




//WEDNESDAY: FACTORIALIZE A NUMBER 阶乘
//declare a function factorialize(num), which returns the factorial of the int
//e.g. 5! = 1 * 2 * 3 * 4 * 5 = 120
//factorialize(0) should return 1.

function f(n){
    let result;
    if(n == 0) {
        result = 1;
    } else {
        for(i = 1; i < n+1; i++){
            // result = n * (i+1); //WRONG
            result = n * f(n-1); //在function里call function
        }
    }
    return result
}
console.log(f(5));

//答案如下：
function factorialize(num){
        if( num===0 )
        return 1
        if(num < 0 )
        return "the number is smaller than 0"
        else if ( num> 0){
            return (num* factorialize(num-1))
        }
    }

console.log(factorialize(5))


//THURSDAY: PALINDROME CHECKER
//declare a function isP(str), which takes a string as an input
//return true or false
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//delete space in a str & turn all characters into one case [STRING METHODS!]
//get access to characters of the str and check if they are ==

function isP(str){
    str.trim();
    str.toLowerCase();
    for(i = 0; i < str.length; i++) {
        if(str.charAt(i) == str.charAt(str.length -i-1)){
            return true
        } else {return false}
    }
}
console.log(isP('cat'))

//"Invalid left-hand side in assignment" - means = is used instead of == / ===



//FRIDAY: 3RD HIGHEST NUM IN ARRAY
//only do one iteration of the array (one for/while loop)

//function thirdHighest(arr)， return the num - didnt use it
//由小到大新对arr进行排序 [SORT] - swap - 

//other ways: how to find the max, like previous practice[?]
//https://www.geeksforgeeks.org/c-program-find-largest-element-array/

arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// minNum = arr[0];
 
// for(i = 1; i< arr.length-1; i ++){
//     if(arr[i]< minNum){
        
       //这里没弄出来
// }

// console.log(arr);

// arr = arr.sort(function(a, b){ return a - b; }); //从小到大排列
arr = arr.sort(function(a, b){ return b - a; }); //从大到小排列
console.log(arr[2]);



//答案：
const array1 = [3,5,7,1,9,11,100,4,500,200];
let i = 0;  
while(i<array1.length){
    if(array1[i] < array1[i+1]){
        temp = array1[i]
        array1[i] = array1[i+1]
        array1[i+1] = temp
      i=-1
    }
    i=i+1
}
console.log(array1[2]);