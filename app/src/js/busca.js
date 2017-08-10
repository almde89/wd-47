// Qualquer alteraçãod no campo input pode-se utilizar
// o evento 'input' que captura keyup, kepress, paste, etc
// .on() - função jQuery para tratamento de eventos
$('#busca').on('input', function() {
    //guarda o valor digitado, removendo espaços extras
    // this - neste contexto é o cara que sofreu o evento, foi
    //encapsulado com $() para forçar que é do jQuery
    var busca = $(this).val().trim();

    if (busca.length) {
        $('.cartao')
            .hide() // começa escondendo tudo
            .filter(function() { //vai aplicar o filtro para cada cartão (caso true)
                //this representa o Input, colocando dentro do $() expande
                //com as funcionalidades do jquery
                return $(this).find('.cartao-conteudo') //aqui this é o cartão
                    .text()
                    // tem que usar o RegExp pois se usar o \busca\i 
                    // é a regex literal, e não buscaria o valor da variável
                    // Usou-se o RegExp pois tinhamos uma variável
                    .match(new RegExp(busca, 'i')); // padrão, flag
            }).show(); // só mostra com os casos que o filtro pegou
    } else {
        $('.cartao').show();
    }
});