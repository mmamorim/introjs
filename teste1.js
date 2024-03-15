// Ponto virgula ao final de linha É OPCIONAL

// IMPRESSÃO

console.log("oi gente");
console.log("oi gente", 34);

// Testes com strings 

console.log('oi "gente" hello world');
console.log("teste 'teste' teste");
console.log(`alguma "coisa" 'aqui' algo`);

// Variáveis
let nome = "Ana Cebola"
let texto = `
    oi
    gente
    tudo bem?
`
let idade = 24; 

idade = idade + 1.5;

console.log("Nome: "+nome);
console.log("valor da idade: "+idade);
console.log("valor da idade: ",idade);
console.log("Nome: ",nome," idade: ",idade);
console.log(`Nome: ${nome} idade: ${idade}`);
console.log("Texto: "+texto);

if(idade > 30) {
    console.log('idade maior que 30');
} else {
    console.log('idade menor ou igual a 30');
}   

for(let i=0; i<10; i++) {
    console.log("valor do i: ",i);
}

