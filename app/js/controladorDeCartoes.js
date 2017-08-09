var controladorCartoes = (function($) {
    'use strict';
    function criarCartao(conteudo, cor = 'EBEF40') {

        var timer;
        var contador = $('.cartao').length;

        contador++;

        // Criando o conteúdo do novo Cartão
        // .text() pega como texto puro, não interpreta o html
        //var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').text(textoDigitado); 
        var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo')
            .attr('contenteditable', true).html(conteudo)
            .on('input', function () {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    publisher.emitirEvento(eventos.precisaSincronizarMural);
                }, 1000);
            });
        console.log(conteudoNovoCartao);

        // Opções do Cartãos
        var botaoRemove = $('<button>')
            .addClass('opcoesDoCartao-opcao opcoesDoCartao-remove')
            .text('Remove')
            .click(removeCartao)
            .attr('data-idcartao', contador);

        var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao')
            .append(botaoRemove).append(opcoesDeCoresDoCartao('cartao'+contador));

        var tamanhoCartao = decideTamanhoCartao(conteudo);
        console.log('classe tam cartao: ' + tamanhoCartao);

        // Criando a div do novo Cartao e adicionar o Botão e o Conteudo
        var novoCartao = $('<div>')
            .addClass('cartao')
            .addClass(tamanhoCartao)
            .append(opcoesDoCartao)
            .append(conteudoNovoCartao)
            .attr('id', 'cartao' + contador)
            .css('background-color', cor)
            .on('change', '.opcoesDoCartao-radioCor', function () {
                var cor = $(this).val();
                $('#cartao'+contador).css('background-color', cor);
                publisher.emitirEvento(eventos.precisaSincronizarMural);
            });
        console.log(novoCartao);

        // Atibuindo a section
        $('.mural').prepend(novoCartao);

        //OU
        //$('<div>').addClass('cartao').append(conteudoNovoCartao).prependTo(novoCartao);
    }

    function removeCartao() {
        console.log("removeCartao()...");

        var botaoRemove = this; // como foi chamado pelo EventListener, veio do Botao, o this corresponde a quem recebeu o evento, como o click foi no botão é a ele que corresponde

        //No HTML: <button ... data-idcartao="5">
        //Nao pode usar CamelCase no HTML, teve que mudar o idCartao para idcartao
        var idDoCartao = botaoRemove.dataset.idcartao;
        var cartao = document.querySelector('#cartao' + idDoCartao);

        cartao.classList.add('cartao--some');
        setTimeout(function() {
            cartao.remove();
            publisher.emitirEvento(eventos.precisaSincronizarMural);
        }, 170);
    }

    function decideTamanhoCartao(conteudo) {
        console.log('decideTamanhoCartao()');

        var quebras = conteudo.split('<br>').length;
        console.log("quebras: " + quebras);

        var totalDeLetras = conteudo.replace(/<br>/g, ' ').length;

        var ultimoMaior = '';

        conteudo.replace(/<br>/g, ' ')
            .split(' ')
            .forEach(function(palavra) {
                if (palavra.length > ultimoMaior.length) {
                    ultimoMaior = palavra;
                }
            }, this);

        var tamMaior = ultimoMaior.length;

        //no minimo, todo cartao tem o texto pequeno
        var tipoCartao = 'cartao--textoPequeno';

        if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
            tipoCartao = 'cartao--textoGrande';
        } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
            tipoCartao = 'cartao--textoMedio';
        }

        return tipoCartao;
    }

    function opcoesDeCoresDoCartao(idDoCartao) {
        var cores = [
            { nome: "Padrão", codigo: "#EBEF40" },
            { nome: "Importante", codigo: "#F05450" },
            { nome: "Tarefa", codigo: "#92C4EC" },
            { nome: "Inspiração", codigo: "#76EF40" }
        ];

        var opcoesDeCor = $("<div>").addClass("opcoesDoCartao-cores");

        $.each(cores, function () {
            var cor = this;

            var idRadioCor = "cor" + cor.nome + "-" + idDoCartao;

            var radioCor = $("<input>")
                .addClass("opcoesDoCartao-radioCor")
                .val(cor.codigo)
                .attr({
                    type: "radio",
                    id: idRadioCor,
                    name: "corDoCartao" + idDoCartao
                });

            var labelRadioCor = $("<label>")
                .addClass("opcoesDoCartao-opcao opcoesDoCartao-cor")
                .text(cor.nome)
                .css("color", cor.codigo)
                .attr("for", idRadioCor);

            opcoesDeCor.append(radioCor).append(labelRadioCor);
        });

        return opcoesDeCor;
    }

    return {
        cria: criarCartao //retorna a ref "cria" para acessar a função criarCartao()
    }
})(jQuery);