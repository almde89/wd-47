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