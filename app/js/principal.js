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

    function removerCartao (_self) {
        return function (evento) {
            /* 
                as duas maneiras existentes para acesso de um atributo criado.
                Por padrão, utilizar prefixo data- em todos os atributos criados.
            */
            //document.querySelector('#cartao'.concat(this.getAttribute('data-cartao'))).remove();
            //document.querySelector('#cartao'.concat(this.dataset.cartao)).remove();
            var cartao = document.querySelector('#cartao'.concat(_self.get(0).dataset.cartao));
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
            .click(removerCartao(botaoRemover));
    }

    function criarCartao (conteudoDigitado, id) {
        var novoCartao = $('<div>')
            .addClass('cartao')
            .addClass(defineTipoCartao(conteudoDigitado))
            .attr('id', 'cartao'.concat(id));
        var conteudoNovoCartao = $('<p>')
            .addClass('cartao-conteudo')
            //.text(conteudoDigitado);/* Equivale ao textContent */
            .html(conteudoDigitado);/* Equivale ao innerHtml */
        novoCartao.append(criarOpcoesDoCartao(id)).append(conteudoNovoCartao);
        
        return novoCartao;
    }

    function salvarCartao() {
        return function (evento) {
            evento.preventDefault();
            var conteudoDigitado = $('.novoCartao-conteudo', this).val()
                .trim().replace(/\n/g, '<br>')
                .replace(/(\*\*)(\w+)(\*\*)/g, function (match, p1, p2, p3, offset, string) {
                    return '<b>' + p2 + '</b>';
                }).replace(/(\*)(\w+)(\*)/g, function (match, p1, p2, p3, offset, string) {
                    return '<b>' + p2 + '</b>';
                });;

            if (conteudoDigitado) {
                adicionarNovoCartao(conteudoDigitado, ++numCartoes);
            }
        };
    }

    function defineTipoCartao(texto) {
        var quebras = texto.split('<br>').length - 1;
        var textoSemQuebras = texto.replace('<br>', ' ');
        var letras = textoSemQuebras.length;
        var palavras = textoSemQuebras.split(' ');
        var tamanhoMaiorPalavra = 0;

        $.each(palavras, function() {
            var palavra = this;
            if (palavra.length > tamanhoMaiorPalavra) tamanhoMaiorPalavra = palavra.length;
        }, this);

        if (quebras < 5 && letras < 55 && tamanhoMaiorPalavra < 9) {
            return 'cartao--textoGrande';
        } else if (quebras < 6 && letras < 75 && tamanhoMaiorPalavra < 12) {
            return 'cartao--textoMedio';
        } else {
            return 'cartao--textoPequeno';
        }
    }

    var btComutaLayout = document.querySelector('#mudaLayout');
    btComutaLayout.addEventListener('click', comutarLayout(btComutaLayout));

    var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');
    botoesRemove.forEach(function(botao) {
        botao.addEventListener('click', removerCartao(botao));
    }, this);

    var formNovoCartao = $('.novoCartao');
    formNovoCartao.submit(salvarCartao(formNovoCartao));

    $('#busca').on('input', function () {
        var buscaDigitada = $(this).val().trim();
        var regexBusca = new RegExp(buscaDigitada, 'i');
        $('.cartao').hide().filter(function () {
            return regexBusca.test($('.cartao-conteudo', this).text());/* $('.cartao-conteudo', this) para deixar de pegar
            coisas que não são referente ao texto de visualização do cartão. Sem isso poderíamos pegar o conteúdo do botão 'remove'*/
        }).show();
    });
})(jQuery);