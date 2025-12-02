alert('Boas vindas ao jogo do número secreto');
let numeroTeto = prompt('Digite o intervalo maximo do jogo: ');
let numeroSecreto = parseInt(Math.random() * numeroTeto) + 1;
let chute = 0;
let tentativas = 1;

while (chute !== numeroSecreto){
  chute = Number(prompt(`Escolha um número entre 1 e ${numeroTeto}`));

  if (chute === numeroSecreto) {
    alert(`Isso ai!! parabens voce acertou, o numero secreto era ${numeroSecreto}`);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Você acertou em ${tentativas} ${palavraTentativa}`);

  } else {
      if (chute < numeroSecreto) {
        alert(`Que pena! tente novamente! o numero é maior que: ${chute}`);
      } else {
          alert(`Que pena! tente novamente! o numero é menor que: ${chute}`);
        }
      tentativas++;
    }
}
