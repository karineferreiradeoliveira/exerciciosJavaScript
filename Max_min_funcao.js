function maxMin(number1 = 0, number2 = 0) {
  if (number1 > number2) {
    return ('O número maior é: '+ number1);
  } else if (number1 === number2) {
    return 'Os números são iguais';
  } else {
    return 'O número maior é: '+number2;
  }
}

console.log(maxMin(6, 6));


function superMax (n1, n2) {
return n1>n2 ? n1:n2// ternário simplifica e deixa o codigo limpo 
}
console.log(superMax(3,5))