const lista = [];

const aluno = {
  nome: "keven",
  idade: 25,
  faculdade: "POLI",
  cidade: "Palmares",
};

// for

for (let i = 0; i < 100; i++) {
  lista.push(i);
}

// for 2

for (let i = 0; i < lista.length; i++) {
  console.log("Lista", i);
}

// for in

for (const key in aluno) {
  console.log(key, aluno[key]);
}

// for of

for (const valor of lista) {
  console.log(valor);
}

let executeAte100 = true;
let i = 0;

while (executeAte100) {
  i++;
  console.log(new Date().toISOString());

  if (i === 100) {
    executeAte100 = false;
  }
}
