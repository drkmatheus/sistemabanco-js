import Conta from "./Conta.js";

class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(agencia, cliente, 0);
    ContaCorrente.numeroDeContas += 1;
  }

  // sobreescreve o metodo sacar da classe Conta
  sacar(valor) {
    let taxa = 1.1;
    return this.saque(valor, taxa);
  }
}

export default ContaCorrente;
