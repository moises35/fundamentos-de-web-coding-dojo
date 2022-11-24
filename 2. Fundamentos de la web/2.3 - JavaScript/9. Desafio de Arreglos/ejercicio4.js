function reverse(arr) {
    // tu código aquí
    let lastIndex = arr.length - 1;
    for(let i = 0; i < arr.length / 2; i++) {
        let temp = arr[lastIndex];
        arr[lastIndex] = arr[i];
        arr[i] = temp;
        lastIndex--;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
