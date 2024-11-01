/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/





let listaCompras = [];

let itensUsuario = ["arroz", "feijão", "macarrão"];

for (let item of itensUsuario) {
    listaCompras.push(item);
}

if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite");
}

console.log("Lista de Compras:", listaCompras);
