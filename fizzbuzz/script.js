/**
 * Fizz Buzz Javascript to set your own variables for divisble by and the words that replaces 
 * the numeric values with strings
 * 
 * author: Gino Villalpando GinoVillalpandoWork@gmail.com
 */
document.addEventListener("submit", (event) => {

    event.preventDefault();

    //FizzBuzz Function that will manipulate our variables set from the DOM
    function fizzBuzzGame() {


        let string1 = document.querySelector("input[name='firstInput']").value;
        let string2 = document.querySelector("input[name='secondInput']").value;
        let num1 = document.querySelector("input[name='firstNum']").value;
        let num2 = document.querySelector("input[name='secondNum']").value;
        
        //declare variable that will be the array
        let output = [];

        //use for loop to iterate array starting at the index of 0 and incrementing each time the loop has finished
        for(let i = 1; i <= 100; i++){
            
            //conditionals that check if the number is divisible by the value from the DOM if so replace with the strings set from the DOM as well
            if( i % num1 === 0 && i % num2 === 0 ) {
                output.push(string1 + " " + string2); 
            } else if( i % num1 === 0 ) { 
                output.push(string1);
            } else if ( i % num2 === 0 ) { 
                output.push(string2);
            } else {
                output.push(i);
            }

        //return the array with the finished iteration
        } return output;
    
    //forEach loop that iterates the finished output for fizzBuzzGame and adds HTML elements and manipulates the DOM
    }; fizzBuzzGame()
        .forEach((item) => {

            let li = document.createElement("li");
            let text = document.createTextNode(item);

            li.appendChild(text);
            document.getElementById("results").appendChild(li).innerHTML;
      });
});

