//console.log('meu nome é karine, e eu estou aprendendo JavaScript as', 10, 'hs da manhã')

let fazerHamburguer = "pão";

function myBurguer(ingrediente, molho) {
  fazerHamburguer += ingrediente + molho;
}

//console.log(fazerHamburguer)
myBurguer(" queijo ", "e maionese");
console.log("Você escolheu Hamburguer de", fazerHamburguer);
