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
        console.log(`O livro ${this.titulo} está sendo lido.`);
    }

    public exibirDetalhes(): void {
        console.log(`O livro ${this.titulo} feito por ${this.autor} tem ${this.paginas} páginas.`);
    }
}

export default Livro;