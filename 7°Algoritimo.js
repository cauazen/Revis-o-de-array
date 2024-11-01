/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/
let exerecicioSemana =['corrida', 'flexões', 'abdominais']
if(exerecicioSemana[exerecicioSemana - 1] !== "alongamento"){
    exerecicioSemana.push("alongamento")
}

console.log(exerecicioSemana)