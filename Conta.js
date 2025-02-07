class Conta {
  constructor(agencia, cliente, saldoInicial) {
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
    if (this.saldo > 0) {
      this.saldo -= valor;
      return valor;
    }
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
