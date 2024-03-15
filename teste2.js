

function imprimePim4(numero) {
    let texto = ""
    for(let i=1; i<=numero; i++) {
        if(i%4==0) {
            texto = texto + 'PIM '    
        } else {
            texto = texto + i + ' '
        }
    }
    console.log(texto);
}

// função anônima
let imprimePim3 = (numero) => {
    let texto = ""
    for(let i=1; i<=numero; i++) {
        if(i%3==0) {
            texto = texto + 'PIM '    
        } else {
            texto = texto + i + ' '
        }
    }
    console.log(texto);
}

imprimePim3(15);
// fatorial(5) = 5*4*3*2*1

function fatRecursivo(numero) {
    if(numero == 1) {
        return 1
    } else {
        return numero*fatRecursivo(numero-1)
    }
}

let sub = (x,y) => x-y 
let soma = (x,y) => { return x+y }

console.log((soma)(5,4));
console.log(sub(5,4));

let resp = ((numero) => {
    let resultado = 1
    for(let i=1; i<=numero; i++) {
        resultado = resultado * i
    }
    return resultado
})(5)
console.log(resp);

resp = fatRecursivo(4)
console.log(resp);