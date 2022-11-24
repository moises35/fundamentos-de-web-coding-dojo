function betterThanAverage(arr) {
    let sum = 0;

    // calcula el promedio
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let promedio = sum / arr.length;
    // Cuenta cuántas variables son mayores que el promedio
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > promedio) {
            count++;
        }
    }
    return count;
}

let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
