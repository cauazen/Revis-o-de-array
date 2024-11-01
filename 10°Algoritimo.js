/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let numeros = [12, 7, 22, 45, 7, 8, 3, 7, 19, 5];

let numeroParaVerificar = 7; 
let indices = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroParaVerificar) {
        indices.push(i);
    }
}

if (indices.length > 0) {
    console.log(`O número ${numeroParaVerificar} foi encontrado nos índices: ${indices.join(", ")}`);
} else {
    console.log(`O número ${numeroParaVerificar} não foi encontrado no vetor.`);
}
