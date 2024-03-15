

function imprimePim(numero) {
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

let func1 = imprimePim
let func2 = func1

imprimePim(10)
func1(15)
func2(30)

console.log("o que tem na variavel func2?",func2);