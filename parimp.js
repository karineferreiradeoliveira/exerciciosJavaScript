function parimp(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(parimp(200));


//OUTRA SOLUÇÃO

function parimp (n){
    if(n % 2 == 0){
        return "par"
    }else {
       return "impar"
    }
}
let result = parimp(133);//armazenando o resultado em uma variável
console.log(result)