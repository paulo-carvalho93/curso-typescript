"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'Paulo', idade: 27 }));
// Criando função com Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Paulo', idade: 27 }));
// Generics disponíveis na API
// A classe Array foi criada de uma forma genérica na API JS, porém podemos atribuir tipos nesse generics
const avaliacoes = [10, 9.3, 6.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5') -- Não consegue dar um push em um Array genérico do tipo number
console.log(avaliacoes);
// Array 
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Paulo']);
imprimir([
    { nome: 'Paulo', idade: 22 },
    { nome: 'Fulano', idade: 24 },
    { nome: 'Cicrano', idade: 15 }
]);
imprimir([
    { nome: 'Paulo', idade: 22 },
    { nome: 'Fulano', idade: 24 },
    { nome: 'Cicrano', idade: 15 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Something'));
//# sourceMappingURL=genericos.js.map