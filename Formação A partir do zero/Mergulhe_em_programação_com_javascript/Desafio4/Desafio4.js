//Parte 1
console.log(`Seja muito bem-vindo(a)`);

//Parte 2
let nome = 'Rafael';
console.log(`Olá, ${nome}`);

//Parte 3
let nome2 = 'Rafael';
alert(`Olá, ${nome2}`);

//Parte 4
let linguagem = prompt(`Qual é a sua linguagem de programação?`);
console.log(`A linguagem de programação é ${linguagem}`);

//Parte 5
let number1 = 4;
let number2 = 19;
let resultado = number1 + number2;
console.log(`O resultado da soma de ${number1} e ${number2} é ${resultado}`);

//Parte 6
let number1x = 4;
let number2y = 19;
let resultadox = number1x - number2y;
console.log(`O resultado da subtração de ${number1x} e ${number2y} é ${resultadox}`);

//Parte 7
let idade = Number(prompt('Qual a sua idade?'));
if (idade >= 18) {
  console.log('Você é maior de idade');
} else {
  console.log('Você é menor de idade');
}

//Parte 8
let numero = Number(prompt('Digite um numero'));
if (numero > 0) {
  console.log('O numero é positivo');
} else if (numero < 0) {
  console.log('O numero é negativo');
} else {
  console.log('O numero é zero');
}

//Parte 9
let numero1 = 1;
while (numero1 <= 10){
  console.log(numero1);
  numero1++;
}

//Parte 10
let nota = Number(prompt('Digite a nota do aluno'));
if (nota >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

//Parte 11
console.log(Math.random());

//Parte 12
console.log(parseInt(Math.random() * 10) + 1);

//Parte 13
console.log(parseInt(Math.random() * 1000) + 1);