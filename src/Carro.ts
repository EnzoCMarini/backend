class Carro {
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        _modelo: string,
        _ano: number,
        _cor: string
    ) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }

    //public ligar(): boolean {}

    public acelerar(velocidade: number): void {
        console.log(`O carro ${this.modelo} está acelerando a ${velocidade}km/h.`);
    }
}

export default Carro;