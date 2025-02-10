import Conta from "./Conta.js";

class ContaSalario extends Conta {
  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
  }

  sacar(valor) {
    const taxa = 1.002;
    this.saque(valor, taxa);
  }
}

export default ContaSalario;
