// classe abstrata
class Conta {
  constructor(agencia, cliente, saldoInicial) {
    if (this.constructor == Conta) {
      throw new Error("Não é permitido instanciar essa classe");
    }
    this.agencia = agencia;
    this.cliente = cliente;
    this.saldo = saldoInicial;
  }

  setCliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this.cliente = novoCliente;
    }
  }

  getCliente() {
    return this.cliente;
  }

  getSaldo() {
    return this.saldo;
  }

  sacar(valor) {
    taxa = 1;
    return this.saque(valor, taxa);
  }

  saque(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this.saldo > 0) {
      this.saldo -= valor;
      return valor;
    }
    return "Saldo insuficiente";
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}

export default Conta;
