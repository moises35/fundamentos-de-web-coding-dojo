function siempreHambriento(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "comida") {
            console.log("delicioso");
            count++;
        }
    }
    if(count > 0) {
        console.log("Tengo hambre");
    }

}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
