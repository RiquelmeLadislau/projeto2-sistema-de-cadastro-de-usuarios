const Usuario = require("../class/Usuario") // supondo que o código esteja em usuario.js

test("Deve criar um usuário e retornar mensagem de boas-vindas", () => {
  const user = new Usuario("Carlos", 30, "carlos@email.com")
  expect(user.boasVindas).toBe("Bem-vindo, Carlos!")
})

test("Deve ativar e desativar usuário corretamente", () => {
  const user = new Usuario("Duda", 22, "duda@email.com")
  user.ativo = true
  expect(user.ativo).toBe(true)
  user.ativo = false
  expect(user.ativo).toBe(false)
})

test("Deve contar usuários criados corretamente", () => {
  const totalAntes = Usuario.totalUsuarios
  new Usuario("Edu", 28, "edu@email.com")
  expect(Usuario.totalUsuarios).toBe(totalAntes + 1)
})