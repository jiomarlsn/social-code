/**
    1. Declarar uma variável (imutável) com seu nome
    2. Declarar uma variável (imutável) se o dia está chovendo ou não
    3. Declarar uma variável com o ano que você nasceu/data marcante por algum motivo
    4. Declarar uma variável com idade ou número qualquer (mutável) e depois atribua seu valor com outro numero
    5. Crie uma lista numérica de 1 a 10
    6. Crie um objeto (dicionário) com dados de um aluno (dados aleatórios/fictícios)
    7. Crie um objeto de nome dados com as variaveis (chave-valor) dos pontos 1, 2, 3 e 4.
    8. Declare uma variável x com valor 10 e multiplique por um número inteiro qualquer.
    9. Crie uma lista de objetos, com base no ponto 6
    10. Declare uma variável numérica e multiplique por outro número (qualquer número)
*/

const nome = "keven";

const estaChovendo = false;

const dataNascimento = new Date(1996, 1, 19);

let idade = 25;
idade += 1;

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const aluno1 = {
  nome: "keven",
  idade: 25,
  cidade: "palmares",
};

const aluno2 = {
  nome: "Maria",
  idade: 17,
  cidade: "Recife",
};

const dados = {
  nome,
  estaChovendo,
  dataNascimento,
  temperatura: idade,
};

const temperatura = 10 * 5;

const alunos = [
  aluno1,
  aluno2,
  { nome: "Ailton", idade: 21, cidade: "Recife" },
];

const temperatura2 = 10 * temperatura;
