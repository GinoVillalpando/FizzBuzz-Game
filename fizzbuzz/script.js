let fizzBuzzGame = function(s1 = 'fizz', s2 = 'buzz', n1 = 3, n2 = 5) {

    let output = [];


    for(let i = 1; output.length <= 100; i++){

        if( i % n1 === 0 && i % n2 === 0 ) {
             output.push(s1 + s2); 
        } else if( i % n1 === 0 ) { 
            output.push(s1);
        } else if ( i % n2 === 0 ) { 
            output.push(s2);
        } else {
            output.push(i);
        }
    }
    return output;
}

console.log(fizzBuzzGame())