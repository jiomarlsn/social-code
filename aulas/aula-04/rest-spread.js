const pares = [0, 2, 4, 6, 8];
const impares = [1, 3, 5, 7, 9];

const numeros = pares.concat(impares);

// Equivale a (Spread)

const numeros2 = [...impares, ...pares];

// Exemplo 2 -> Objetos

const faculdade = {
  nome: "AESGA",
  cidade: "Garanhuns",
  estado: "Pernambuco",
  email: "aesga@gmail.com",
  telefone: "819999999",
};

const aluno = {
  nome: "Keven",
  idade: 25,
  cidade: "Recife",
  faculdade: {
    ...faculdade,
    telefone: "879999999",
    curso: "ADS",
    periodo: "9 Periodo",
  },
};

const aluno2 = {
  nome: "Joana",
  idade: 20,
  cidade: "Garanhuns",
  faculdade: {
    ...faculdade,
    curso: "Ciência da Computação",
    periodo: "5 Periodo",
  },
};

// console.log(aluno, aluno2);

const arr = [1, 2, 3];
const arr2 = [...arr];

const obj = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2 };

// Rest

const sum = (...values) => {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5, 10, 20, 30));
