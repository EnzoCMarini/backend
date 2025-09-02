import Aluno from "./Aluno.js";
import Carro from "./Carro.js";
import Livro from "./Livro.js";

let aluno1: Aluno = new Aluno("Enzo Cassão Marini", 20251234, "Desenvolvimento de Sistemas");
let aluno2: Aluno = new Aluno("Jadson Santos Oliveira", 20257845, "Educação Física");

aluno1.estudar("Criação de Classes");
aluno1.entregarAtividade();

aluno2.estudar("Corrida");
aluno2.entregarAtividade();

console.log("--------------------------------------------------");

let carro1: Carro = new Carro("Fiat Uno Mille", 1990, "Branco");
let carro2: Carro = new Carro("Subaru Impreza WRX STI Sedan", 2011, "Azul");

if (carro1.ligar() == true) {
    carro1.acelerar(144);
}else {
    console.log(`O carro está desligado.`);
}

if (carro2.ligar() == true) {
    carro2.acelerar(255);
}else {
    console.log(`O carro está desligado.`);
}

console.log("--------------------------------------------------");

let livro1: Livro = new Livro("Harry Potter e a Pedra Filosofal", 309, `Joanne Rowling (J.K. Rowling)`);
let livro2: Livro = new Livro("Dom Quixote de La Mancha", 1033, "Miguel de Cervantes Saavedra");

livro1.ler();
livro1.exibirDetalhes();

livro2.ler();
livro2.exibirDetalhes();