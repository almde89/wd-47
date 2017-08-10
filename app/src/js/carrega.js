// o getJSON() está preparado para receber JSONP, que necessita adicionar
// 2 partametros, uma url e um callback. O retorno não é um json puro, é
// uma função com json dentro. Isso era usado antes de começar a usar o CORS
// em navegadores antigos que não tem suporte a CORS pode-se usar o JSONP
$.getJSON(
    'http://ceep.herokuapp.com/cartoes/carregar?callback=?', { usuario: app.usuario },
    function(res) {
        var cartoes = res.cartoes;
        console.log(cartoes.length + ' carregados em ' + res.usuario);
        cartoes.forEach(function(cartao) {
            //criarCartao(cartao.conteudo, cartao.cor);
            controladorCartoes.cria(cartao.conteudo, cartao.cor);
        })
    }
)