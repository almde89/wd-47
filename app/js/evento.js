var publisher = (function ($) {
    return {
        emitirEvento: function () {
            if (arguments.length) {
                if (arguments.length == 1) $(arguments[0].scope).trigger(arguments[0].name);
                else if (arguments.length == 2) $(arguments[0]).trigger(arguments[1].toString());
            }
        }
    };
})(jQuery);

var eventos = {
    precisaSincronizarMural: {
        scope: document,
        name: 'precisaSincronizar',
        toString: function () {
            return this.name;
        }
    }
};