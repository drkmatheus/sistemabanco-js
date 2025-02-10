// polimorfismo usado com parametro funcionario, por causa da classe generica, Funcionario.
class SistemaAtuenticacao {
  static login(autenticavel, senha) {
    if (SistemaAtuenticacao.isValid(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static isValid(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}

export default SistemaAtuenticacao;
