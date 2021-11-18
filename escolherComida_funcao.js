
// Function para escolher comida
function escolherComida(lanche, salada) {
  if (lanche && salada >= 1) {
    return lanche, "Ops, você vai comer isso tudo?";
  } else if (lanche == 0 && salada >= 1) {
    return salada, "Ótima escolha, parabéns!";
  } else if (lanche == 1 && salada <= 0) {
    return "Xiiiih, você não fez uma escolha saudável.";
  } else {
    return "Você precisa escolher uma opção.";
  }
}
console.log(escolherComida(3, 1));
//console.log(escolherComida(0, 1));
//console.log(escolherComida(1, 0));
//console.log(escolherComida(0, 0));
