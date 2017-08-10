//$('#ajuda').click(function buscaAjudaDoServidor() {
//one() só vai executar uma vez, se chamar o "?" só inseri 1 vez
$('#ajuda').one('click', function buscaAjudaDoServidor() {
    $.getJSON('http://ceep.herokuapp.com/cartoes/instrucoes',
        function(dados) {
            console.log(dados.instrucoes);
            $.each(dados.instrucoes, function() {
                var cartao = this;
                console.log(cartao.conteudo);
                //criarCartao(cartao.conteudo, cartao.cor);
                controladorCartoes.cria(cartao.conteudo, cartao.cor);
            });
        })
});