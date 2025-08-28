class Aluno {
    // atributos
    private nome: string;
    private matricula: number;
    private curso: string;

    // método construtor
    constructor(
        _nome: string,
        _matricula: number,
        _curso: string
    ) {
        this.nome = _nome;
        this.matricula = _matricula;
        this.curso = _curso;
    }

    // método
    public estudar(materia: string): void {
        console.log(`O aluno ${this.nome} está estudando sobre ${materia}.`);
    }

    public entregarAtividade(): void {
        console.log(`O aluno ${this.nome} entregou a atividade.`);
    }
}

export default Aluno;