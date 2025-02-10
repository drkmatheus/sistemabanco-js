import Conta from "./Conta.js";

class ContaPoupanca extends Conta {
  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
  }

  sacar(valor) {
    const taxa = 1.02;
    this.saque(valor, taxa);
  }
}

export default ContaPoupanca;
