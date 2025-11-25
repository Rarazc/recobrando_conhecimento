alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = Math.round(Math.random() * 100);

do{
  let chute = Number(prompt('Escolha um número entre 1 e 100'));

  if (chute == numeroSecreto){
      break;
  }
  else if (chute < numeroSecreto){
    alert('Que pena! tente novamente! o numero é maior que: ' + chute);
  }
  else{
    alert('Que pena! tente novamente! o numero é menor que: ' + chute);
  }
}while (true);
