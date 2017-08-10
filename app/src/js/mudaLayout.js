// para esta função, usar onclick="alterarLayout()" como propriedade do botão no HTML
// function alterarLayout() {
//     document.querySelector(".mural").classList.toggle("mural--linhas");
// }

// var botaoLayout = document.querySelector('#mudaLayout');
// botaoLayout.onclick = alterarLayout; // esta associando a função, é um tratador de evento;


// Mudar Layout da página (Linhas x Colunas)
document.querySelector('#mudaLayout').addEventListener('click', function() {

    //pegar o elemnto com a classe mural
    var mural = document.querySelector('.mural');
    //cartao - conteudo

    //Tira ou coloca a classe
    mural.classList.toggle('mural--linhas');

    //Muda o texto do botão
    if (mural.classList.contains('mural--linhas')) {
        this.textContent = "Blocos";
    } else {
        this.textContent = "Linhas";
    }
});