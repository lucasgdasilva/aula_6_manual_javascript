# Manual de uso - JavaScript

Estudantes: Guilherme Schroeder, Lucas Gabriel da Silva e Lukas Fischer Stolle.

Turma: T TDES 2024/1 M6

# 1. Introdução

- O que é JavaScript?

JavaScript é uma linguagem de programação amplamente utilizada em todo o mundo, que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc, isso é feito graças ao JavaScript

- Para que JavaScript serve em páginas web?

O JavaScript serve para tornar páginas web interativas e dinâmicas, indo além da estrutura (HTML) e estilo (CSS). Ele permite atualizar conteúdos sem recarregar a página, validar formulários, criar animações, gerenciar multimídia, mapas interativos e construir aplicações web complexas, sendo essencial para a experiência do usuário moderno

- Como o Javascript complementa o HTML e CSS?

O JavaScript (JS) complementa o HTML (estrutura) e o CSS (estilo) adicionando comportamento, interatividade e dinamismo às páginas web. Enquanto o HTML define o esqueleto e o CSS a aparência, o JS atua como o "músculo", manipulando o DOM (Document Object Model) para alterar elementos e estilos em tempo real.

# 2. Formas de uso do HTML

- JavaScript escrito dentro da própria página HTML.

O JavaScript pode ser implementado dentro de um documento HTML de diversas maneiras. Por exemplo, ele pode ser implementado dentro do próprio código HTML. 
Exemplo encontra-se dentro da pasta "01_script_no_html".

- JavaScript em arquivo separado (script.js).

Para utilizar JavaScript em um arquivo separado (script.js), crie um arquivo com a extensão .js e vincule-o no HTML usando a tag <script src="script.js"></script> antes do fechamento do </body>. Isso separa o código (melhor organização/manutenção), permite o reuso em múltiplas páginas e melhora o desempenho. 
Exemplo encontra-se dentro da pasta "02_script_externo".


 # 3. Variáveis, tipos e escopo

- O que é uma variável

As variáveis ​​são parte integrante de quase todas as linguagens de programação e geralmente são um dos primeiros tópicos que você aprenderá quando começar a codificar. As variáveis ​​podem ser usadas para armazenar dados em um programa, como strings, números, objetos JSON ou valores booleanos.

- Como declarar variáveis

Declarar uma variável envolve definir um nome, escolher o tipo de dado (se necessário) e atribuir um valor opcional usando um operador de atribuição, geralmente o sinal de igual (=). Em linguagens como JS, MDN, usa-se var, let ou const, enquanto linguagens tipadas exigem o tipo (ex: int, string). A variável reserva um espaço na memória para guardar informações como números, texto ou booleanos.

- Diferença entre var, let e const

var: Escopo de função ou global, pode ser redeclarado e reatribuído.
let: Escopo de bloco {} (como if, loops), não pode ser redeclarado, mas pode ser reatribuído.
const: Escopo de bloco, não pode ser redeclarado nem reatribuído (valor constante).

- Quando cada uma pode ser usada



- O que é escopo de uma variável?

O escopo de uma variável é o contexto ou região do código onde ela é definida e pode ser acessada ou modificada, Compreender o escopo é fundamental para evitar bugs, gerenciar memória e organizar código. 





# Referências:

https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

https://vivendodeprogramacao.com.br/como-separar-o-javascript-do-html#:~:text=Guia%20para%20Iniciantes-,Por%20que%20separar%20o%20JavaScript%20do%20HTML?,em%20cache%2C%20melhorando%20o%20desempenho.

https://learn.microsoft.com/pt-br/office/vba/language/concepts/getting-started/declaring-variables

https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/

https://linguagemc.com.br/funcoes-e-escopo-de-variaveis/

https://www.dio.me/articles/variaveis-javascript

