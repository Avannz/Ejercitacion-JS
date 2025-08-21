
/**
 * 
 * @param {Array} arr 
 * @returns 
 */


function range  (start, end, step = 1) { /// Ejercicio numero uno, chequear pq se printean dos 10´s 

    let arr = [];
    
    for(let i = start; i <= end; i++){

        arr.push(i); 
    }

    return arr;
}

function range_step  (start, end, step) { /// Ejercicio numero uno, chequear pq se printean dos 10´s 


    if(step){

    }
    
    for(let i = start; i <= end; i++){

        arr.push(i); 
    }

    return arr;
}


arr = range(1, 10);
console.log(arr);

/**
 * 
 * @param {Array} arr 
 * @returns 
 */

function sum (arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(numbers));

/**
 * 
 * @param {Array} arr 
 * @returns 
 */

function range(start, end, step = 1) {
    let arr = [];
    
    // Verifica si el step es positivo o negativo y hacer el rango correspondiente
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    } else {
        // Si el step es 0, no tiene sentido, podríamos lanzar un error o devolver un arreglo vacío
        throw new Error('El parámetro step no puede ser 0.');
    }

    return arr;
}

