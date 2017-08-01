'strict';
(function () {
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

    /**
     * 
     * @param {*} _self 
     */
    function removerCartao (_self) {
        return function () {
            /* 
                as duas maneiras existentes para acesso de um atributo criado.
                Por padrão, utilizar prefixo data- em todos os atributos criados.
            */
            //document.querySelector('#cartao'.concat(_self.getAttribute('data-cartao'))).remove();
            //document.querySelector('#cartao'.concat(_self.dataset.cartao)).remove();
            var cartao = document.querySelector('#cartao'.concat(_self.dataset.cartao));
            cartao.classList.toggle('cartao--some');
            setTimeout(function () {cartao.remove();}, 1000);
        };
    }

    var btComutaLayout = document.querySelector('#mudaLayout');
    btComutaLayout.addEventListener('click', comutarLayout(btComutaLayout));

    var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');
    botoesRemove.forEach(function(botao) {
        botao.addEventListener('click', removerCartao(botao));
    }, this);
})();