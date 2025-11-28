alert('Boas vindas ao jogo do número secreto');
let numeroTeto = prompt('Digite o intervalo maximo do jogo: ');
let numeroSecreto = Math.round(Math.random() * numeroTeto);

// loop do while com break apenas ao acertar o numero
do{
  let chute = Number(prompt(`Escolha um número entre 1 e ${numeroTeto}`));

  if (chute == numeroSecreto){
      alert(`Isso ai!! parabens voce acertou, o numero secreto era ${numeroSecreto}`);
      break;
  }
  else if (chute < numeroSecreto){
    alert(`Que pena! tente novamente! o numero é maior que: ${chute}`);
  }
  else{
    alert(`Que pena! tente novamente! o numero é menor que: ${chute} `);
  }
}while (true);
