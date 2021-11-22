let myAdress = {
    rua: 'Tancredo Neves',
    cidade: 'Salvador',
    cep: 4500000
}

function exibirEndereco(myAdress){
    for (let chave in myAdress)
    console.log(chave, myAdress [chave])
}
exibirEndereco(myAdress)