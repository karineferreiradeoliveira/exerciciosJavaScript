//criar uma funcao que conta a quantidade de asteriscos por linha


exibirAsteriscos(10)

function exibirAsteriscos(linhas){

    //let padrao = '';
   //for(let linha = 1; linha <= linhas; linha++){
  //      padrao +=  '*' ;
  //      console.log(padrao)



//Segunda forma de resolver = loop interior/  loop nestado/ loop nest
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let  i = 0; i < linha; i++);
        padrao += '*';
    }
    console.log(padrao);

  

}
