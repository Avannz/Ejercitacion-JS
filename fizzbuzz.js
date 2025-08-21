
/** Escribir un programa que escriba a la consola los numeros del 1 al 100 con dos excepciones
Cuando el numero es divisible por 3, escribir Fizz y cuando es divisible por 5 (pero no por 3) escribir Buzz.
Cuando eso funcione modificar para escribir FizzBuzz cuando el numero es divisible tanto por 3 como por 5. */

function fizzbuzz (){


    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log ("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz")
        }
        else if(i % 5 === 0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

