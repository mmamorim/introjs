console.log("Brincando com desestruturação...");

let jogador = {
    nome: "Pedro",
    idade: 20,
    endereco: {
        rua: "Rua Alface",
        numero: 233,
        cep: "39393-300"
    },
    cidade: "São Paulo"
}

console.log("jogador: ",jogador);

//let nome = jogador.nome
//let idade = jogador.idade

let { nome, idade, cidade } = jogador

console.log("nome: ",nome);
console.log("idade: ",idade);
console.log("cidade: ",cidade);

