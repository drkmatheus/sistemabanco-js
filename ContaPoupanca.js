import Conta from "./Conta.js";

class ContaPoupanca extends Conta {
  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
  }
}

export default ContaPoupanca;
