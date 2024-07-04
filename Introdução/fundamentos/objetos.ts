// Objetos e interfaces

interface Pessoa {
    nome: String,
    idade: number,
    profissao?: String
    // ? transforma a propriedade em OPCIONAL
}

const pessoa: Pessoa = {
    nome: 'Julia',
    idade: 21
}

const outraPessoa: Pessoa = {
    nome: 'Guilherme',
    idade: 20,
    profissao: 'Desenvolvedor'
}

// Declarar arrays
const arrayPessoas: Pessoa[] = [
    pessoa, outraPessoa
]
// OU
const arrayPessoa: Array<Pessoa> = [
    pessoa, outraPessoa
]

const arrayNum: Number[] = [
    1, 2, 3
]

const arrayString: Array<string> = [
    'Julia', 'Julinha', 'Juju'
]