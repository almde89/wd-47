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