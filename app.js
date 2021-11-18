//alert('Com a nossa mensagem')
//alert näo retorna a mensagem ou seja é undefined.

//conso

//confirm('eu posso retornar 2 valores boleanos?')//retorna true caso usuario confime a mensagem
//ou retorna falso caso o usuario cancele a mensagem.
//para capturar a resposta use:

//const confirma = confirm ('realmente deseja retornar?')

const num1 = prompt('Digite um numero: ');
const num2 = prompt('Digite outro número: ');

let resultado = parseInt(num1) + parseInt(num2);
alert('A soma dos números que voçë digitou foi: '+ resultado);