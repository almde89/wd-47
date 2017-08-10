# Aula 2

## retrospectiva aula 1 && comentários póstumos

> nomes de classes com "--sufixo", siginifica que a classe é a mesma com algumas alterações.
> O sufixo serve apenas para contextualizar a alteração da classe CSS.

## selector do document

> Seleciona todos <element>s com class mural.
```javascript
document.querySelectorAll('.mural').classList.add('mural--linhas');
```

OR

> Seleciona o primeiro <element> com class mural.
```javascript
document.querySelector('.mural').classList.add('mural--linhas');
```

OR

> frágil, pois depende do arranjo de elementos dos DOM.
> várias pessoas alterando o DOM podem quebrar a lógica de mudança da apresentação.
```javascript 
document.body.children[1].classList.toggle('mural--linhas');
```

## eventos

> Fundação Mozilla. Definições.

https://developer.mozilla.org/pt-BR/docs/Web/Events

## diretiva transition no CSS

Ela faz a postergação progressiva de todas as diretivas de um seletor CSS. Todas as propriedades de uma classe definida irão transitar progressivamente.

# Aula 3

## Explorando o emmet

> Cria form com dois elementos:
- **textarea** com uma class e um atributo name configurado e um atributo com espaço configurado (placeholder)
- **input** do type submit com uma class e um atributo salvar
`form.container.novoCartao>textarea.novoCartao-conteudo[name=novoCartao-conteudo][placeholder="Digite aqui"]+input:submit.novoCartao-salvar[value=Salvar]`

# Aula 5

## AJaX - Asynchronous Javascript and XML || AJaJ - Asynchronous Javascript and JSON
Houve alteração apenas nos Browsers. Os servidores não sabem nem notam a diferença entre uma requisição Ajax e HTTP normal, pois não houve alteração no protocolo HTTP.

## JSON
Não é a mesma coisa que um objeto Javascript. É um subset do modelo de objetos do Javascript.
JSON não contém métodos nem comentários, por exemplo.

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

# Aula 8

## npm 

`npm install gulp --save-dev`: utilizar `--save-dev` para o Gulp, pois é uma ferramenta de desenvolvimento, apenas. `--save` deve ser utilizado para as dependências de Produção.

### npm link

Para o Gulp instalado globalmente (`npm install -g`), deve ser linkado com o projeto. Utilizar `npm link gulp` para criar um link simbólico local para instalação global.

## Gulp

### Gulp pipe()

> **Nota**: colocar sempre `return` para **tasks** que sejam _pipeáveis_.