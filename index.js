//write your code here
function stripUpperCase(string) {
    // let newString = " " // use this string to BUILD our solution 
    // for loop to iterate through the string
    // check if the character is a lowercase letter or special character
    // check if the character is NOT a capital letter
    // add the character to the end of newString
    // return newString
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        // console.log(string[i])
        let character = string[i];
        // console.log(character.toLowerCase() === character)
        if(character === character.toLowerCase()){
            // console.log(character)
             newString += character
        }
    }
    return newString
};
console.log(stripUpperCase('Hello!'))