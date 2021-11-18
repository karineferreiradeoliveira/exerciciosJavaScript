/*let name = "karine";
//let names = ["Eduardo", "Liz", "Titus"]
let names = ["joao", "paulo", "pedro"];
for (name of names) {
  console.log(name[1]);
}

let mynumbers = [20, 30, 40, 50];
for (let sum of mynumbers) {
  sum += 5;
  console.log(sum);
}
*/


let iterable = [3, 5,7, 99];


for (let i in iterable) {
  console.log("for in - Eu retorno propriedades",i); // escreve 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log("For of - eu retorno os elementos reais",i); // escreve 3, 5, 7
}