const para = document.querySelector  ('p');
    para.addEventListener('click',atualizarNome);

    function atualizarNome() {
        var nome = prompt('Insira um novo nome');
        para.textContent = 'Usuário 1:' + nome;
    }