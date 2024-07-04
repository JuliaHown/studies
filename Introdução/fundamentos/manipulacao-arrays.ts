const novoArray: Array<number> = [1, 2, 3, 4, 5, 6]

const buscaNum = novoArray.find(num => num > 5)

console.log(buscaNum)

novoArray.forEach(num => {
    if(num > 2 && num % 2 === 0) {
        console.log(num * 2)
    }
})

novoArray.map(num => {
    if(num > 2 && num % 3 === 0) {
        console.log(num * 2)
    }
})

// O map pode ser usado em funções assíncronas
// Diferença entre map vs forEach é a perfomance - forEach é um pouco mais lento