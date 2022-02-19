const numero = Number(prompt("Digite um Número: "));

const numeroTitulo = document.querySelector("#numero-titulo");
const texto = document.querySelector("#texto")

numeroTitulo.innerHTML= numero;
texto.innerHTML += `<p> A raiz quadada do número ${numero} é:  ${numero ** 2} </p>`
texto.innerHTML += `<p> O número ${numero} é inteiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> O número  é NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredando para cima ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`

