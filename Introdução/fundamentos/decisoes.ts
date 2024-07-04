// Condicionais

const numero: number = 15

if(numero > 15) {
    console.log('Num maior que 15')
} else if(numero === 15) {
    console.log('Num igual a 15')
} else {
    console.log('Num menor que 15')
}

// Objetos literais

const typeUser = {
    admin: 'Seja bem-vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode apenas visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
    // user as keyof typeof typeUser: a variável user pode ser usada como chave para o tipo do objeto typeUser
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')
