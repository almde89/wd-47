// ##### COM JQUERY ######
// Refatorada com Arrow Function e encapsulada
// jQuery() ou $() - para indicar o uso do jQuery
// Não retorna um elemento do DOM, mas um objeto jQuery
// $('.novoCartao').submit((evento) => {
//     evento.preventDefault(); //prevenir a execução do evento default, no caso não executr o submit

//     // Obtendo dados digitados pelo usuário
//     // https://regex101.com/
//     var campoConteudo = $('.novoCartao-conteudo', this);
//     console.log(campoConteudo);
//     var textoDigitado = campoConteudo.val()
//         .trim()
//         .replace(/\n/g, '<br>')
//         .replace(/(\*\*)(\w+)(\*\*)/g, function(match, p1, p2, p3, offset, string) {
//             return '<b>' + p2 + '</b>';
//         })
//         .replace(/(\*)(\w+)(\*)/g, function(match, p1, p2, p3, offset, string) {
//             return '<em>' + p2 + '</em>';
//         });
//     console.log("tam (" + textoDigitado.length + ")");
//     console.log(textoDigitado);

//     if (!textoDigitado) return;

//     criarCartao(textoDigitado);
// });

// ##### COM JQUERY ######
//var contador = $('.cartao').length;
// jQuery() ou $() - para indicar o uso do jQuery
// Não retorna um elemento do DOM, mas um objeto jQuery
$('.novoCartao').submit(salvaCartaoJquery);

function salvaCartaoJquery(evento) {
    evento.preventDefault(); //prevenir a execução do evento default, no caso não executr o submit

    // Obtendo dados digitados pelo usuário
    // https://regex101.com/
    var campoConteudo = $('.novoCartao-conteudo', this);
    console.log(campoConteudo);
    var textoDigitado = campoConteudo.val()
        .trim()
        .replace(/\n/g, '<br>')
        .replace(/(\*\*)(\w+)(\*\*)/g, function(match, p1, p2, p3, offset, string) {
            return '<b>' + p2 + '</b>';
        })
        .replace(/(\*)(\w+)(\*)/g, function(match, p1, p2, p3, offset, string) {
            return '<em>' + p2 + '</em>';
        });
    //.replace(/\*\*\b/g, '<b>') //fazer **texto** para negrito
    //.replace(/\b\*\*/g, '</b>') //fazer **texto** para negrito
    //.replace(/\*\b/g, '<em>') //fazer *texto* para italico
    //.replace(/\b\*/g, '</em>') //fazer *texto* para italico
    console.log("tam (" + textoDigitado.length + ")");
    console.log(textoDigitado);

    //if (textoDigitado.length <= 0) return;
    if (!textoDigitado) return;

    //criarCartao(textoDigitado);
    controladorCartoes.cria(textoDigitado);
    broadcast.emitirEvento(eventos.precisaSincronizarMural);
}

// ### JAVASCRIPT PURO ####
/* var formulario = document.querySelector('.novoCartao');
formulario.addEventListener('submit', salvaCartao);

function salvaCartao(evento) {
    evento.preventDefault(); //prevenir a execução do evento default, no caso não executr o submit
    var campoConteudo = document.querySelector('.novoCartao-conteudo');
    var textoDigitado = campoConteudo.value;
    console.log(textoDigitado);
    // Criando o conteũdo do novo Cartão
    var conteudoNovoCartao = document.createElement('p');
    conteudoNovoCartao.classList.add('cartao-conteudo');
    conteudoNovoCartao.textContent = textoDigitado;
    console.log(conteudoNovoCartao);
    // Criando a div do novo Cartao
    var novoCartao = document.createElement('div');
    novoCartao.classList.add('cartao');
    //novoCartao.innerHTML = conteudoNovoCartao; // esse nao funciona pois innerHTML só para texto
    novoCartao.appendChild(conteudoNovoCartao);
    console.log(novoCartao);
    // Atibuindo a section
    var mural = document.querySelector('.mural');
    //mural.appendChild(novoCartao); // Insere no Final
    mural.insertBefore(novoCartao, mural.firstElementChild); // Adiciona o cartão antes do primeiro filho atual
    console.log(mural);
} */