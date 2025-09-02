class Livro {
    private titulo: string;
    private paginas: number;
    private autor: string;

    constructor(
        _titulo: string,
        _paginas: number,
        _autor: string
    ) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }

    // método
    public ler(): void {
        const numeroAleatorio: number = Math.random();
        if (numeroAleatorio < 0.5) {
            console.log(`O livro ${this.titulo} não está sendo lido e está livre para leitura.`);
        } else {
            console.log(`O livro ${this.titulo} está sendo lido e está indisponivel para leitura no momento.`);
        }
    }

    public exibirDetalhes(): void {
        console.log(`O livro ${this.titulo} feito por ${this.autor} tem ${this.paginas} páginas.`);
    }
}

export default Livro;