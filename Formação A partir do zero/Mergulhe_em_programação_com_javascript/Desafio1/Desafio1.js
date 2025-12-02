alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = '25';
let numeroDeVendas = '50';
let saldoDisponivel = '1000';

alert('Erro! Preencha todos os campos');

let mensagemDeErro = ('Erro! Preencha todos os campos');
alert(mensagemDeErro);

let userName = prompt('Digite seu nome');
let userAge = prompt('Digite sua idade');

if(userAge >= 18){
  alert('Pode tirar a habilitação!');
}
else{
  alert('Falta ' + (18 - userAge) +' anos para tirar a habilitação');
}