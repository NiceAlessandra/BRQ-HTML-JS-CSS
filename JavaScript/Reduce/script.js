const produtos = [
    {
        nome: 'Celular',
        categoria: 'Eletronico',
        preco: 900
    },
    {
        nome: 'MacBook',
        categoria: 'Eletronico',
        preco: 8000
    },
    {
        nome: 'Super Mario Bros',
        categoria: 'Jogo',
        preco: 60
    }
]

//reduce
let total = produtos.reduce((acumulador, item) => acumulador += item.preco, 0);
console.log(total);

let totalConvertido = produtos
.filter(x => x.categoria == 'Eletronicos')
.map (x => x.preco * 5.40)
.reduce (( acumulador, item) => acumulador += item, 0);

console.log(totalConvertido);