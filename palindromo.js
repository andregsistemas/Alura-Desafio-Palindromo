// Function Declaration

// essaPalavroeUmPalindromo();

// function essaPalavroeUmPalindromo() {
//     var palavra = "rever";
//     var separandoAsLetrasDasPalavras = palavra.split("");
//     var palavraInvertida = separandoAsLetrasDasPalavras.reverse();
    
//     palavraInvertida = palavraInvertida.join("");
    
//     if( palavra == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palíndromo!`);
//     } else {
//         console.log(`A palavra ${palavra} não é um palíndromo!`);
//     }
// }

// Function expression

const essaPalavroeUmPalindromo = function(palavra) {
    
    var separandoAsLetrasDasPalavras = palavra.split("");
    var palavraInvertida = separandoAsLetrasDasPalavras.reverse();
    
    palavraInvertida = palavraInvertida.join("");
    
    if( palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}

essaPalavroeUmPalindromo("radar");