//1 Declare 5 variáveis para representar uma viagem (destino, nome do viajante, cidade de origem, duração em dias e meio de transporte)
//2 Organizar uma forma de imprimir esses valores com interpolação ou saída individual
const destino =  "Salt Lake";
const nomeViajante = "Joel";
const cidadeOrigem = "Boston";
let duracao = 12;
let transporte = "Carro";

console.log (`O viajante ${nomeViajante} precisa viajar de ${cidadeOrigem} até ${destino}, de ${transporte} por ${duracao} dias.`);

//3  Crie duas variáveis com o custo a passagem, hospedagem e alimentação 
//4 Imprimir uma soma dos valores

const gasolina = 200;
const alimentacao = 350;

let total = gasolina + alimentacao;

console.log("O total dos gastos será: R$" + total + " reais.");