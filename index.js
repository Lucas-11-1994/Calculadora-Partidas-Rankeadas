// Calcular saldo e DEfinir Nivel do Heroi

function calcular (Vitorias , derrotas){
   let saldo  =  Vitorias - derrotas
   let nivel = ""

   if (Vitorias < 10 ){
    nivel = "Ferro"
   }else if (Vitorias >=11 && Vitorias <= 20){
    nivel = "Bronze"
   }else if (Vitorias >= 21 && Vitorias <= 50){
    nivel = "Prata"
   }else if (Vitorias >= 51 && Vitorias <= 80){
    nivel = "Ouro"
   }else if (Vitorias >= 81 && Vitorias <= 90){
    nivel = "Diamante"
   }else if (Vitorias >= 91 && Vitorias <= 100){
    nivel = "Lendario"
   }else {
    nivel = "Imortal"
   } 

   return { saldo, nivel };
}

// Execução do código
let resultado = calcular(175, 20); // Exemplo: 75 vitórias e 20 derrotas

// Saída formatada
console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);