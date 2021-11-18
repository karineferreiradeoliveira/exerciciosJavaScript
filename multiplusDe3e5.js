//
//criar funcao que retorna a
//soma de todos os multiplus de 3 e 5
//
//multiplus de 3
//3, 6, 9
//multiplus de 5
//5, 10
//
//somando dos multiplus
//armazenar os multiplus de 5
//armazenar os multiplus de 3
//somar os dois

somar(10)

function somar (limite){
    let multiplus3 = 0;
    let multiplus5 = 0;
   

    for(let i = 0; i<=limite; i++){
        if(i % 3 === 0)
        multiplus3+=i;
        if(i % 5 === 0)
        multiplus5+=i;  
    }

    console.log(multiplus3 + multiplus5);
}
