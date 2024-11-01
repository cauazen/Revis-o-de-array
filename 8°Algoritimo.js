/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = [];

let tarefasUsuario = ["varrer a casa", "passar pano", "lavar roupa", "limpar a cozinha"];

for (let tarefa of tarefasUsuario) {
    tarefasLimpeza.push(tarefa);
}

tarefasLimpeza.splice(2, 1);

tarefasLimpeza[1] = "limpar banheiro"; 

console.log("Lista de Tarefas de Limpeza:", tarefasLimpeza);
