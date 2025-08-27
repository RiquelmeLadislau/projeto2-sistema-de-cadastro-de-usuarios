class Usuario{
    #ativo
    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
        Usuario.totalUsuarios++
    }

    static totalUsuarios = 0

    static contarUsuarios() {
        console.log(`
            Total de usuários criados: ${this.totalUsuarios}
            `)
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(valor) {
        this.#ativo = valor
    }

    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`
    }

    mostrarDados() {
        console.log(`
            ${this.boasVindas}
            Nome: ${this.nome}
            Idade: ${this.idade}
            Email: ${this.email}
            Ativo: ${this.#ativo}
            ===================
            `)
    }
}

module.exports = Usuario 