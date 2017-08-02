'strict';
(function ($) {
    var numCartoes = $('.cartao').length;
    /**
     * Comuta o layout entre linhas e blocos.
     * @param {*} _self
     */
    function comutarLayout(_self) {
        /**
         * Tratador de evento de onclick para #mudarLayout
         */
        return function () {
            var mural = document.querySelector('.mural');
            mural.classList.toggle('mural--linhas');
            
            if (mural.classList.contains('mural--linhas')) _self.textContent = 'Blocos';
            else _self.textContent = 'Linhas';
        };
    }

    function removerCartao () {
        return function (evento) {
            /* 
                as duas maneiras existentes para acesso de um atributo criado.
                Por padrão, utilizar prefixo data- em todos os atributos criados.
            */
            //document.querySelector('#cartao'.concat(this.getAttribute('data-cartao'))).remove();
            //document.querySelector('#cartao'.concat(this.dataset.cartao)).remove();
            var cartao = document.querySelector('#cartao'.concat(this.dataset.cartao));
            cartao.classList.toggle('cartao--some');
            setTimeout(function () {cartao.remove();}, 1000);
        };
    }

    function adicionarNovoCartao (conteudoDigitado, id) {
        criarCartao(conteudoDigitado, id).prependTo('.mural');
    }

    function criarOpcoesDoCartao(id) {
        return $('<div>')
            .addClass('opcoesDoCartao')
            .append(criarBotaoRemoverCartao(id));
    }

    function criarBotaoRemoverCartao(id) {
        var botaoRemover = $('<button>')
            .addClass('opcoesDoCartao-opcao opcoesDoCartao-remove')
            .text('Remove')
            .attr('data-cartao', id);
        return botaoRemover
            .click(removerCartao());
    }

    function criarCartao (conteudoDigitado, id) {
        var novoCartao = $('<div>')
            .addClass('cartao')
            .attr('id', 'cartao'.concat(id));
        var conteudoNovoCartao = $('<p>')
            .addClass('cartao-conteudo')
            .text(conteudoDigitado);
        novoCartao.append(criarOpcoesDoCartao(id)).append(conteudoNovoCartao);
        
        return novoCartao;
    }

    function salvarCartao() {
        return function (evento) {
            evento.preventDefault();
            var conteudoDigitado = $('.novoCartao-conteudo', this).val()
                .trim().replace(/\n/g, '<br>');

            if (conteudoDigitado) {
                adicionarNovoCartao(conteudoDigitado, ++numCartoes);
            }
        };
    }

    var btComutaLayout = document.querySelector('#mudaLayout');
    btComutaLayout.addEventListener('click', comutarLayout(btComutaLayout));

    var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');
    botoesRemove.forEach(function(botao) {
        botao.addEventListener('click', removerCartao(botao));
    }, this);

    var formNovoCartao = $('.novoCartao');
    formNovoCartao.submit(salvarCartao(formNovoCartao));
})(jQuery);