class Cliente {
  id;
  nomeCompleto;
  cpf;
  telefone;
  dataNascimento;
  senha;

  constructor(nomeCompleto, cpf, senha) {
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.senha = senha;
  }

  getId() {
    return this.id;
  }

  setId(newId) {
    this.id = newId;
  }

  getNomeCompleto() {
    return this.nomeCompleto;
  }

  setNomeCompleto(novoNomeCompleto) {
    this.nomeCompleto = novoNomeCompleto;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(novoCpf) {
    this.cpf = novoCpf;
  }

  getTelefone() {
    return this.telefone;
  }

  setTelefone(novoTelefone) {
    this.telefone = novoTelefone;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  setDataNascimento(novaDataNascimento) {
    this.dataNascimento = novaDataNascimento;
  }

  setSenha(novaSenha) {
    this.senha = novaSenha;
  }
}

export default Cliente;
