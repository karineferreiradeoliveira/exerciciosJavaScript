

function Postagem(titulo, mensagem, autor){

    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = ['aaaaa', 'mmmmm'],
    this.estaAoVivo =  false
}

const postagem = new Postagem('a','e','re','t','r','y');
console.log(postagem)