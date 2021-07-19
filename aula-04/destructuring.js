// const pares = [0, 2, 4, 6, 8];

// const zero = pares[0];
// const dois = pares[1];
// const quatro = pares[2];

// Equivale a

const [zero, dois, ...pares] = [0, 2, 4, 6, 8];

const faculdade = {
  nome: "AESGA",
  cidade: "Garanhuns",
  estado: "Pernambuco",
  email: "aesga@gmail.com",
  telefone: "819999999",
};

const nomeFaculdade = faculdade.nome;
const cidadeFaculdade = faculdade.cidade;
const estadoFaculdade = faculdade.estado;
const restoFaculdade = {
  email: faculdade.email,
  telefone: faculdade.telefone,
};

// Equivale a

const {
  nome,
  cidade,
  estado,
  pais = "Brasil",
  matricula: registro,
  ...faculdadeObj
} = {
  nome: "AESGA",
  cidade: "Garanhuns",
  estado: "Pernambuco",
  email: "aesga@gmail.com",
  telefone: "819999999",
  matricula: 12345,
};

console.log(nomeFaculdade, cidadeFaculdade, estadoFaculdade);
console.log(nome, cidade, estado);
console.log(pais);
