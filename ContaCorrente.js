import Conta from "./Conta.js";

class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(agencia, cliente, 0);
    ContaCorrente.numeroDeContas += 1;
  }
}

export default ContaCorrente;
