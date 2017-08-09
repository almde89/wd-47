# Aula 6

Faltei esta aula. Criei um branch materia_fabio, pois peguei o material todo do Fábio e criei a tag aula6 com base nesse material.

vou trabalhar a partir desse material para as aulas 7 e 8.

# Aula 7

## Eventos do DOM
Os eventos são emitidos do ponto disparados para acima. Ou seja, eventos emitidos em pelo documento, por exemplo, não serão ouvidos pelos seus filhos, como o .mural, por exemplo.

Mas os eventos podem ser emitidos a nível de mural e serem escutados pelo document.

## Debounce Pattern

```javascript
/*
B - caso o evento que chama este código ocorra dentro da restrição de tempo, cancela a operação de envio de mensagem, para evitar que operações pesadas sejam repetidas continuamente em um tempo muito curto.
*/
clearTimeout(timer);
/* A - tentar enviar a mensagem dentro de uma
restrição de tempo.
*/
timer = setTimeout(function() {
    publisher.emitirEvento(eventos.precisaSincronizarMural);
}, 1000);
```