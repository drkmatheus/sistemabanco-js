import Cliente from "./Cliente.js";

class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  Cliente;
  saldo = 0;

  setCliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this.Cliente = novoCliente;
    }
  }

  getCliente() {
    return this.Cliente;
  }

  getSaldo() {
    return this.saldo;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if (this.saldo > 0) {
      this.saldo - valor;
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

export default ContaCorrente;
