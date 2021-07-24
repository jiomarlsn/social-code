class Aluno {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  getNomeAluno() {
    return this.nome;
  }

  setNomeAluno(nome) {
    this.nome = nome;
  }

  getNotaAluno(materia) {
    const notas = {
      Português: 10,
      Inglês: 9,
      Matemática: 8,
    };

    return notas[materia] || 0;
  }

  getResultadoAlunoMateria(materia) {
    return `O aluno ${this.nome} tirou nota ${this.getNotaAluno(
      materia
    )} na materia ${materia}`;
  }
}

var aluno = new Aluno("Keven", 25, "Palmares");
var aluno2 = new Aluno("Maria", 19, "Recife");
var aluno3 = new Aluno("Ailton", 20, "Primavera");

aluno.setNomeAluno("Keven 222222");

console.log(aluno.getNomeAluno());

console.log(aluno.getResultadoAlunoMateria("Português"));
console.log(aluno2.getResultadoAlunoMateria("Inglês"));
console.log(aluno3.getResultadoAlunoMateria("História"));
