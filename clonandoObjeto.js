const carroDePasseio = {
  marca: "chevrolet",
  cor: "prata",
  potencia: {
    motor: 1.4,
    valvulas: 8,
  },
  ligar: function () {
    console.log("Testando o carro...");
  },
};

const novoCarro = Object.assign(
  {
    //incluir nova propriedade
    ano: 2020,
  },
  carroDePasseio
);
console.log(novoCarro);

//segunda forma de clonar objeto

const carro2 = { ...carroDePasseio };
console.log(carro2);
