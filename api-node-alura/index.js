const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        const app = customExpress()

        Tabelas.init(conexao)
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))

        console.log(`conectado com sucesso no banco`)
    }
})

