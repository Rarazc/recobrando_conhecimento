alert('Boas vindas ao jogo do número secreto');
let numeroTeto = prompt('Digite o intervalo maximo do jogo: ');
let numeroSecreto = Math.round(Math.random() * numeroTeto);
let chute = 0;
let tentativas = 1;

while (chute !== numeroSecreto){
  chute = Number(prompt(`Escolha um número entre 1 e ${numeroTeto}`));

  if (chute === numeroSecreto) {
    alert(`Isso ai!! parabens voce acertou, o numero secreto era ${numeroSecreto}`);
    alert(`Você acertou em ${tentativas} tentativas`);
  } else {
      if (chute < numeroSecreto) {
        alert(`Que pena! tente novamente! o numero é maior que: ${chute}`);
      } else {
          alert(`Que pena! tente novamente! o numero é menor que: ${chute}`);
        }
      tentativas++;
    }
}
