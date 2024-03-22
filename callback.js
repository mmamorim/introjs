
console.log("😀😀 Brincando com funções de callback...");

let contador = 0


function incrementa() {
    contador++
}

function soma5() {
    contador = contador + 5
}

function fazAlgo(funcao) {
    console.log("estou fazendo alguma coisa...");
    for(let i=0; i < 2999999999; i++) { 

    }
    console.log("terminei e vou chamar a função que vc me passou...");
    funcao()
}

//fazAlgo(function() { 
//    console.log("opa! terminou...");
//    console.log("legal");
//})

console.log("contador",contador);

function bomdia() {
    console.log("bom dia");
}

setTimeout(bomdia,5000)

setTimeout(function() {
    console.log("💥💥💥💥");
    console.log("minha função legal!");
    console.log("💥💥💥💥");
},3000) 