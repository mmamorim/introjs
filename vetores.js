
console.log("Brincando com vetores")

let vet1 = [ 1, "oigente", 2, 3.5, "oi gente" ]

console.log("vet1: ",vet1);

let pos = vet1.findIndex((elem) => {
    if(typeof(elem) == 'string') {
        if(elem.charAt(2) == "g") {
            return true
        }
        return false
    } 
    return false
})
console.log("pos: ",pos);

let vet2 = vet1.map((elem) => {
    return elem+elem
})
console.log("vet2: ",vet2);
