import Aluno from "./Aluno.js";
import Carro from "./Carro.js";
import Livro from "./Livro.js";

let aluno1: Aluno = new Aluno("Enzo Cassão Marini", 20251234, "Desenvolvimento de Sistemas");
let aluno2: Aluno = new Aluno("Jadson Santos Oliveira", 20257845, "Educação Física");

aluno1.estudar("Criação de Classes");
aluno2.estudar("Corrida");

aluno1.entregarAtividade();
aluno2.entregarAtividade();

console.log("--------------------------------------------------");

let carro1: Carro = new Carro("Fiat Uno Millo", 1990, "Branco");
let carro2: Carro = new Carro("Subaru Impreza WRX STI Sedan", 2011, "Azul"); 

carro1.acelerar(151);
carro2.acelerar(255);

//carro1.ligar();
//carro2.ligar();

console.log("--------------------------------------------------");

let livro1: Livro = new Livro("Harry Potter e a Pedra Filosofal", 309, "J.K. Rowling");
let livro2: Livro = new Livro("Dom Quixote de La Mancha", 1033, "Miguel de Cervantes Saavedra");

livro1.ler();
livro2.ler();

livro1.exibirDetalhes();
livro2.exibirDetalhes();