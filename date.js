const dataHoje = new Date();
console.log(dataHoje)

const dataFormatada = new Date('Novembro 24, 2021, 08:30:09');
console.log(dataFormatada)

const birthday = new Date("December 17, 2021 03:24:00");
console.log(birthday)

dataFormatada.setFullYear(2030);

//  dataFormatada.toDateString() -- Converte a data em string
// 'Sun Nov 24 2030'


//Pegar informaçoes do GMT
//dataFormatada.toTimeString()
//'08:30:09 GMT-0300 (Horário Padrão de Brasília)'


//como a data é passada para o servidor
//dataFormatada.toISOString()
//'2030-11-24T11:30:09.000Z'