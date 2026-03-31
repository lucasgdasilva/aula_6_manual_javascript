# Manual de uso - JavaScript

Estudantes: Guilherme Schroeder, Lucas Gabriel da Silva e Lukas Fischer Stolle.

Turma: T TDES 2024/1 M6

# 1. Introdução

- O que é JavaScript?

JavaScript é uma linguagem de programação amplamente utilizada em todo o mundo, que permite a você implementar itens complexos em páginas web. Toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc, isso é feito graças ao JavaScript

- Para que JavaScript serve em páginas web?

O JavaScript serve para tornar páginas web interativas e dinâmicas, indo além da estrutura (HTML) e estilo (CSS). Ele permite atualizar conteúdos sem recarregar a página, validar formulários, criar animações, gerenciar multimídia, mapas interativos e construir aplicações web complexas, sendo essencial para a experiência do usuário moderno

- Como o Javascript complementa o HTML e CSS?

O JavaScript (JS) complementa o HTML (estrutura) e o CSS (estilo) adicionando comportamento, interatividade e dinamismo às páginas web. Enquanto o HTML define o esqueleto e o CSS a aparência, o JS atua como o "músculo", manipulando o DOM (Document Object Model) para alterar elementos e estilos em tempo real.

# 2. Formas de uso no HTML

- JavaScript escrito dentro da própria página HTML.

O JavaScript pode ser implementado dentro de um documento HTML de diversas maneiras. Por exemplo, ele pode ser implementado dentro do próprio código HTML. 
Exemplo encontra-se dentro da pasta "01_script_no_html".

- JavaScript em arquivo separado (script.js).

Para utilizar JavaScript em um arquivo separado (script.js), crie um arquivo com a extensão .js e vincule-o no HTML usando as tags próprias. Isso separa o código (melhor organização/manutenção), permite o reuso em múltiplas páginas e melhora o desempenho. 
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

Exemplos encontram-se na pasta "03_tipos_variaveis"

- Quando cada uma pode ser usada

var (Legado): Evite em projetos novos. Útil apenas em códigos legados ou quando for estritamente necessário ter escopo de função. Permite redeclaração e sofre hoisting (comportamento do JavaScript de "mover" declarações de variáveis (var) e funções para o topo do seu escopo antes da execução do código. Isso permite  chamar funções ou usar variáveis antes da linha onde foram definidas) com valor undefined. 

let (Variável de bloco): Use quando o valor precisar ser reatribuído ou alterado (ex: contadores em loops, estados condicionais). Tem escopo de bloco, sendo mais segura e previsível que var.

const (Constante): Use sempre que o valor da variável não precisar ser alterado ao longo do código (ex: configurações, referências de bibliotecas). Deve ser inicializada na declaração.

- O que é escopo global?

O escopo global em programação refere-se à área mais ampla de um código onde variáveis, funções ou objetos são definidos fora de qualquer bloco específico, como funções, classes ou loops. Elementos no escopo global são visíveis, acessíveis e modificáveis de qualquer lugar do programa.

- O que é escopo de função?

Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

- O que é escopo de bloco?

O escopo de bloco no JavaScript restringe variáveis declaradas com let ou const dentro de chaves {} (como if, for, while) ao seu próprio bloco, impedindo o acesso externo. Ao contrário da var, que vaza para fora do bloco, o escopo de bloco melhora a organização e evita conflitos de nomes.

Exemplos relacionados aos escopos também encontram-se na pasta "03_tipos_variaveis"


# 4. Operadores, comparações e lógica

- Operadores aritméticos principais

Adição (+): Soma dois valores.

Subtração (-): Subtrai o segundo valor do primeiro.

Multiplicação (* ou ×): Multiplica dois valores.

Divisão (/ ou ÷): Divide o primeiro valor pelo segundo.

Módulo/Resto (% ou mod): Retorna o resto de uma divisão inteira.

Exponenciação (^ ou **): Eleva um número a uma potência.

- Operadores relacionais principais

Os principais operadores relacionais (ou de comparação) no JavaScript, que retornam valores booleanos (true ou false), são: igualdade estrita (===), desigualdade estrita (!==), maior que (>), menor que (<), maior ou igual (>=) e menor ou igual (<=). Eles são fundamentais para estruturas condicionais e loops. 

- Operadores lógicos principais

Negação (NÃO / NOT / 
 / !): Inverte o valor lógico. Se a proposição é Verdadeira, torna-se Falsa, e vice-versa 

Conjunção (E / AND / 
 / &&): Resulta em Verdadeiro apenas se todas as condições analisadas forem verdadeiras.

Disjunção (OU / OR / 
 / ||): Resulta em Verdadeiro se pelo menos uma das condições for verdadeira

- Diferença entre == e ===

== (Igualdade Solta/Abstrata): Compara se os valores são iguais, realizando conversão de tipo automaticamente. Ex: 1 == '1' é true.

=== (Igualdade Estrita/Identidade): Compara se valor e tipo são idênticos. Ex: 1 === '1' é false porque um é number e outro é string. 

- Diferença entre != e !==

!= (Diferente): Compara se dois valores são diferentes, mas tenta converter os tipos para que fiquem iguais antes de comparar. Exemplo: 5 != "5" resulta em false porque, para o operador, os valores são considerados iguais.

!== (Estritamente Diferente): Compara se dois valores são diferentes ou se os tipos de dados são diferentes. É uma verificação mais rigorosa. Exemplo: 5 !== "5" resulta em true porque, embora o valor seja o mesmo, um é número e o outro é uma string.

# 5. Estruturas condicionais

- if

A estrutura if em JavaScript é uma condicional que executa um bloco de código apenas se uma determinada condição for verdadeira (true). Ela é fundamental para tomada de decisões no fluxo do programa, podendo ser expandida com else (caso falso) e else if (múltiplas condições).

- if...else

A estrutura if-else no Java é uma instrução condicional usada para tomar decisões. Ela avalia uma expressão booleana (verdadeira ou falsa): se for verdadeira, executa o bloco if; se for falsa, executa o bloco else.

- switch
A estrutura switch no Java é uma forma eficiente de controle de fluxo, usada para selecionar um entre vários blocos de código com base na igualdade de uma única expressão (variável).

# 6. Estruturas de repetição

- for

O loop for no JavaScript é uma estrutura de repetição usada para executar um bloco de código várias vezes com base em uma condição, sendo ideal quando o número de iterações é conhecido. Sua sintaxe inclui inicialização, condição e incremento/decremento. É amplamente utilizado para percorrer arrays, strings e manipular dados repetitivos de forma eficiente

- while

Verificação: O programa verifica a condição no início.
Execução: Se a condição for verdadeira, o bloco de código é executado.
Repetição: Após a execução, o programa volta ao passo 1.
Encerramento: Se a condição for falsa, o loop é interrompido e o programa segue adiante

# 7. Funções

- O que é uma função

Uma função em JavaScript é um bloco de código reutilizável, projetado para realizar uma tarefa específica. Ela atua como um "subprograma", aceitando dados de entrada (parâmetros), processando-os e, opcionalmente, retornando um valor. Funções são essenciais para organizar, modularizar e evitar repetição de código (DRY).

- Como declarar uma função

Para declarar uma função (ou método) em Java, utilize a sintaxe: modificador tipoRetorno nomeDaFuncao(parametros) { corpo }. Ela deve ser definida dentro de uma classe, usando camelCase, com modificadores como public/private e static se for independente de objeto. Use void para funções sem retorno.

- Como chamar uma função

Para chamar uma função em JavaScript, utilize o nome dela seguido de parênteses (). Se a função exigir parâmetros, passe os valores dentro dos parênteses. A sintaxe básica é nomeDaFuncao();. Se a função retornar um valor, você pode armazená-lo em uma variável, ex: let resultado = soma(2, 3);.

- Função com parâmetro

Permitem receber dados externos para processamento. Eles são declarados entre parênteses no cabeçalho do método, definindo o tipo e o nome da variável. Ao chamar o método, os valores passados são copiados para os parâmetros, permitindo métodos flexíveis e reutilizáveis.

- Função com retorno

A declaração return finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

# 8.  Manipulação de página com JavaScript

- document

O document no JavaScript é um objeto global que representa a página HTML carregada no navegador. Ele faz parte do DOM (Document Object Model) e atua como a principal interface para manipular, criar, modificar ou remover elementos HTML e estilos de forma dinâmica e em tempo real. 

- getElementById()

Ela retorna o elemento com o ID especificado. Os IDs devem ser únicos em uma página, portanto, getElementById() sempre retornará um elemento ou `null` se não houver nenhum elemento correspondente.

- querySelector()

O querySelector()()é um método do JavaScript que retorna o primeiro elemento dentro do documento (DOM) que corresponde a um seletor CSS específico (como#id, .classeou tag) [1, 2]. Se nenhum elemento for encontrado, ele retornanull`. Ele é ideal para selecionar elementos de forma flexível.

- .value

 Manipulação de formulários e elementos de entrada (input, textarea, select) no DOM (Document Object Model). Ela permite ler ou alterar o valor contido nesses campos, possibilitando páginas interativas e dinâmicas.

- .checked

A propriedade .checked no JavaScript é uma forma de verificar ou alterar o estado de elementos de formulário, especificamente caixas de seleção (checkbox) e botões de rádio (radio), indicando se estão marcados (true) ou desmarcados (false). Ela é uma propriedade booleana do objeto HTMLInputElement, amplamente usada para interações dinâmicas.

- .textContent

 Obtém o conteúdo de todos os elementos, incluindo os elementos "script" e "style".

- .style

A propriedade .style no JavaScript permite modificar o CSS inline de elementos HTML dinamicamente. Ela acessa o objeto CSSStyleProperties de um elemento, exigindo que propriedades CSS compostas sejam escritas em camelCase (ex: backgroundColor) em vez de kebab-case. Modificações via .style têm precedência sobre estilos de classes CSS. 

- classList

É a forma mais moderna, eficiente e prática de manipular as classes CSS de um elemento HTML diretamente no DOM.
 
- addEventListener()

O método addEventListener() em JavaScript é utilizado para anexar um manipulador de eventos (uma função de callback) a um elemento específico no DOM (Document Object Model). Ele "escuta" a ocorrência de um evento, como um clique ('click'), e executa a função definida quando o evento acontece. 



# Referências:

https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

https://vivendodeprogramacao.com.br/como-separar-o-javascript-do-html#:~:text=Guia%20para%20Iniciantes-,Por%20que%20separar%20o%20JavaScript%20do%20HTML?,em%20cache%2C%20melhorando%20o%20desempenho.

https://learn.microsoft.com/pt-br/office/vba/language/concepts/getting-started/declaring-variables

https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/

https://linguagemc.com.br/funcoes-e-escopo-de-variaveis/

https://www.dio.me/articles/variaveis-javascript

https://www.ibm.com/docs/pt-br/spss-statistics/cd?topic=charts-variable-types

https://cursos.alura.com.br/forum/topico-diferencas-const-let-e-var-200251

https://imasters.com.br/desenvolvimento/escopos-em-javascript#:~:text=Escopo%20%C3%A9%20a%20acessibilidade%20de,do%20c%C3%B3digo%20%C3%A9%20o%20escopo.

https://www.ibm.com/docs/pt-br/cics-ts/5.6.0?topic=expressions-arithmetic-operators

https://www.google.com/search?q=operadores+relacionais+principais+no+javascript&rlz=1C1RXQR_pt-PTBR1201BR1201&oq=operadores+relacionais+principais+no+javascript&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigAdIBCDQwNjNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8&safe=active&ssui=on

https://www.estrategiaconcursos.com.br/blog/operadores-logicos-fundamentais/

https://pt.stackoverflow.com/questions/3186/qual-a-diferen%C3%A7a-entre-operadores-e-em-javascript

https://cursos.alura.com.br/forum/topico-qual-a-diferenca-de-e-achava-que-era-usada-somente-para-igual-e-para-diferente-132796#:~:text=resposta-,qual%20a%20diferen%C3%A7a%20de%20!=,para%20igual%20e%20=%20para%20diferente.&text=solu%C3%A7%C3%A3o!&text=s%C3%A3o%20operadores%20de%20compara%C3%A7%C3%A3o;%20comparam%20valores%20(e%20tipos).&text=compara%20se%20o%20valor%20de%20a%20%C3%A9%20igual%20ao%20valor%20de%20b.&text=compara%20se%20o%20valor%20de%20a%20%C3%A9%20diferente%20do%20valor,estas%20vari%C3%A1veis%20seriam%20comparativamente%20iguais.&text=J%C3%A1%20o%20terceiro%20e%20o,estas%20vari%C3%A1veis%20seriam%20comparativamente%20diferentes.&text=compara%20se%20o%20valor%20e,e%20ao%20tipo%20de%20b.

https://www.devmedia.com.br/javascript-if-else-criando-scripts-com-estruturas-condicionais/39686

https://www.rocketseat.com.br/blog/artigos/post/estruturas-condicionais-java-guia-iniciantes

https://www.dio.me/articles/como-usar-switch-case-no-java

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for#:~:text=Usando%20for%20A%20declara%C3%A7%C3%A3o%20for%20come%C3%A7a%20declarando,vari%C3%A1vel%20i%20ap%C3%B3s%20cada%20passagem%20pelo%20loop.

https://blog.formacao.dev/while-e-do-while/

https://www.rocketseat.com.br/blog/artigos/post/funcoes-em-javascript-guia-completo

https://pet-comp-ufsc.github.io/tutorials/langs/java/functions/defining.html

https://www.ibm.com/docs/pt-br/db2/11.5.x?topic=routines-parameter-style-java-functions

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return

https://developer.mozilla.org/pt-BR/docs/Web/API/Document

https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector

https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checked

https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/DOM_scripting

https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener

https://builtin.com/articles/queryselector-vs-getelementbyid#:~:text=Explica%C3%A7%C3%A3o%20do%20m%C3%A9todo%20GetElementById()&text=atributo%20%60ID%60.-,Ela%20retorna%20o%20elemento%20com%20o%20ID%20especificado.,em%20todos%20os%20navegadores%20modernos.

https://cursos.alura.com.br/forum/topico-sobre-value-257132

https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent#:~:text=textContent%20obt%C3%A9m%20o%20conte%C3%BAdo%20de,os%20elementos%20de%20um%20n%C3%B3.

https://www.alura.com.br/artigos/eventos-do-dom?srsltid=AfmBOopDIF3i3UJ4n3sy5dkrwaYw9M-2IU741SACvTflsr79guOKr-6a
