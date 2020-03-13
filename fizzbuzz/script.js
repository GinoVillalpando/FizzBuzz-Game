


let string1 = document.querySelector("input[name='firstInput']")
    .addEventListener("change", (event) => {
    string1 = event.target.value;
    console.log(string1)
});

// console.log(string1)

// string1.addEventListener("change", (event) => {
//     string1 = event.target.value;
//     console.log(string1)   
// });
// let string2 = document.querySelector("#secondInput").innerHTML
// let num1 = document.querySelector("#firstDivisble").innerHTML
// let num2 = document.querySelector("#secondDivisible").innerHTML

// .addEventListener("change", textContents());innerHTML
// console.log(results)

// function setInput(event){
//     if()
// }

console.log(string1)

//create a variable that passes a function that will be our fizzbuzz game with variables that can be changed
function fizzBuzzGame(string1, string2 = 'buzz', num1 = 3, num2 = 5) {


    console.log(string1)
    //create variable that will be an array
    let output = [];

    //use for loop to iterate array starting at the index of 0 and incrementing each time the loop has finished
    for(let i = [0]; output.length <= 100; i++){
        
        //if, else if, and else statements that check if the number variables are divisble
        if( i % num1 === 0 && i % num2 === 0 ) {
             output.push(string1 + " " + string2); 
        } else if( i % num1 === 0 ) { 
            output.push(string1);
        } else if ( i % num2 === 0 ) { 
            output.push(string2);
        } else {
            output.push(i);
        }

    }

    return output;
}


console.log(fizzBuzzGame(string1, "buzz", 3, 5));