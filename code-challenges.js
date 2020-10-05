// ASSESSMENT 5: JavaScript Coding Practical Questions

console.log("\n")
console.log("Week 5 Assessment - Java Script Code Challenges - Brian Thomas Hammond", "\n")

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"


//Write a function that takes a string
const l33tSp34k = (string) => {
    //Split each letter of that string into an array
    //Map over that array using a ternary operator to change a, e, and o to 3, 4, and 0 respectively
    //Leave all other characters unchanged
    //Join all characters in the array into a string
    //Return that string
    return string.split("").map( value => value === 'a' ? value = 4 : value === 'e' ? value = 3 : value === 'o' ? value = 0 : value).join("")
}

console.log("#1:")
console.log(l33tSp34k(secretCodeWord1))// expect: "l4ck4d41s1c4l"
console.log(l33tSp34k(secretCodeWord2), "\n")// expect: "g0bbl3dyg00k"



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//Write a function that takes an array
const allAWords = (array) => {
    //Filter over the elements of the argument array
    //Convert each element to lowercase
    //Include all elements that contain the character 'a'
    //Join all elements into a string, placing a space between each element 
    //Return the string
    return array.filter( value => value.toLowerCase().includes('a')).join(" ")
}

console.log("#2:")
console.log(allAWords(arrayOfWords), "\n")// expect: "Apple" "Banana" "Peach"

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//Write a function that takes an array
const isFullHouse = (argumentArray) => {
    //Create an empty array to hold the ranks from the argument array
    answerArray = []
    //Map over the argument array to push a single instance of each rank to the answer array
    argumentArray.map(value => answerArray.includes(value) ? "" : answerArray.push(value))
    //If the answerArray does not have a length of 2 return false for the entire function
    if (answerArray.length !== 2) {
        return false
    }
    // //If not, map over the elements of the answerArray to execute the following expession twice: 
    // //Filter through the argument array - if the elements match the element of the answer array at the map's current index exactly twice return true for that iteration of map
    // //If either iteration of the map function returns true (i.e. if the array returned by map includes the value true), then return true for the entire function 
    else if (answerArray.map((value, index) => argumentArray.filter( value => value === answerArray[index]).length === 2).includes(true)) {
        return true
    }
    // //Else return false for the entire function
    else {
        return false
    }
    //Here is the above logic in ternary form:
    // return answerArray.length !== 2 ? false :  answerArray.map((value, index) =>  argumentArray.filter( value1 => value1 === answerArray[0]).length === 2).includes(true) ? true : false
}

console.log("#3:")
console.log(isFullHouse(hand1))// expect: true
console.log(isFullHouse(hand2))// expect: false
console.log(isFullHouse(hand3), "\n")// expect: false
