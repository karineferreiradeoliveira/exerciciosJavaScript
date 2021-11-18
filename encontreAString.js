//criar um metodo para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
  titulo: "Vingadores",
  ano: 2020,
  diretor: "Robin",
  personagem: "Capitão América",
};

exibirPropriedades(filme);

function exibirPropriedades(obj) {
  for (property in obj) if (typeof obj[property] === "string")
  console.log(property, obj[property]);
}
