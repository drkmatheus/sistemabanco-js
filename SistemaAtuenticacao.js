// polimorfismo usado com parametro funcionario, por causa da classe generica, Funcionario.
class SistemaAtuenticacao {
  static login(funcionario, senha) {
    return funcionario.senha == senha;
  }
}

export default SistemaAtuenticacao;
