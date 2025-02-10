class Funcionario {
  constructor(nomeCompleto, cpf, salario) {
    this.id;
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.salario = salario;
    this.dataNascimento;
    this.telefone;
    this.senha;
    this.bonus = 1;
  }

  autenticar(senha) {
    return senha == this.senha;
  }

  cadastraSenha(senha) {
    this.senha = senha;
  }
}

export default Funcionario;
