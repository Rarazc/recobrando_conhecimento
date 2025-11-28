// Função para normalizar o texto do dia da semana para casos de erro de escrita ou falta de acento
function normalizarDia(dia){
    return dia
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/-?feira/g, "")
      .replace(/-/g, "")
      .trim();
}

let diaDaSemana = normalizarDia(prompt('Digite o dia de hoje'));

if (diaDaSemana == 'sabado' || diaDaSemana == 'domingo'){
  alert('Bom final de semana!');
}
else{
  alert('Boa semana!');
}

//Parte 2 do desafio
alert('Parte 2 do desafio: numero positivo ou negativo');

let numero = Number(prompt('Digite um numero'));

if(numero > 0){
  alert('O numero é positivo');
}
else if(numero < 0){
  alert('O numero é negativo');
}
else{
  alert('Espertinho o numero é zero não é nem positivo nem negativo');
}

//Parte 3 do desafio, pontuação
alert('Parte 3 do desafio: sistema de pontos');
alert('Explicação:  você começa com 200 pontos e perde 10 pontos por resposta errada');

alert('Boas vindas ao jogo do número secreto');
let numeroTeto = 100
let numeroSecreto = Math.round(Math.random() * numeroTeto);
let pontos = 200;

// loop do while com break apenas ao acertar o numero
do{
  let chute = Number(prompt(`Escolha um número entre 1 e ${numeroTeto}`));

  if (chute == numeroSecreto){
    alert(`Isso ai!! parabens voce acertou, o numero secreto era ${numeroSecreto}`);
    alert(`Você fez ${pontos} pontos`);
    break;
  }
  else if (chute < numeroSecreto){
    alert(`Que pena! tente novamente! o numero é maior que: ${chute}`);
    pontos = pontos - 10;
  }
  else{
    alert(`Que pena! tente novamente! o numero é menor que: ${chute} `);
    pontos = pontos - 10;
  }
}while (true);

if(pontos >= 100){
  alert('Parabens você venceu!')
}
else{
  alert('Que pena! você perdeu!')
}


alert('Parte 4 do desafio: saldo');
let saldo = 100;
alert(`O seu saldo é ${saldo}`);

alert('Parte 5 e final do desafio: boas vindas');
alert(`Boas-vindas ${prompt('Digite o seu nome')}`);