// 8. Removing the spaces found in a string

var sentence = '   Hi  my    name Is  Adam    Thao'

var noSpace = sentence.replace(/\s/g, '');
console.log(noSpace)

// var is the variable, sentence is the name of the variable
// whatever is in the parentheses is the string
// added another variable to declare another string.
// the .replace method is a way to remove extra spaces.
// adding the \s matches any whitespace symbols: spaces and tabs
// g is the interative search of the string
// '' is regarding the spaces

//____________________________________________________________________
// 9. Return a Boolean if a number is divisible by 10

function booleanNum(num){
    return num % 10 === 0 ? true : false;
}

console.log(booleanNum(10))
// functions are a block of code to perform a task
// return stops a function and returns a value
// % is a remainder operator
// === (strict equality) checks if two values are equal
// since this is a conditional statement a quesiton mark is added 
// This whole code is a ternary operator 


var num1 = 45;
if(num1 % 10 === 0){
    console.log('true')
}
else{
    console.log('false')
}

//made a if else statement for this problem


//____________________________________________________________________


// 10. Return the number of vowels in a string

function vCount(string){
    let vowelCount = 0 
    const vowels = ['a', 'e', 'i', 'o', 'u'] //vowels array
    for (let char of string) {
        if (vowels.includes(char)) {
            vowelCount++
        }
    }
    return vowelCount
}
console.log(vCount('hi im adam'))

// first we get a function then create a variable in that function
// next we create a vowel arraw next which is [a,e,i,o,u]
// after the array i create a "for of" statement for the string
// char is short for "character"
// i use the includes method to check if the character has any vowels
// the "vowelcount++" would add numbers if theres a vowel
