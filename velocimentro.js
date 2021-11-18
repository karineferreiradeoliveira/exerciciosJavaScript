//velocidade maxima até 70
//a cada 5km acima do limite, ganha 1 ponto
//Math.floor()  - Arrendonda para seu valor mais baixo.
//caso pontos maior que 12 = 'carteira suspensa'

verificarVelocidade(81);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    
  if (velocidade <= velocidadeMaxima) 
    console.log("Ok");
   else {
      const pontos = Math.floor(((velocidade - velocidadeMaxima) /kmPorPonto));
      if(pontos >= 12)
    console.log("Carteira Suspensa");
    else{
        console.log("Pontos: ", pontos);
    }

}
}
