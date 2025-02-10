import Cliente from "./Cliente.js";
import ContaCorrente from "./Conta/ContaCorrente.js";
import ContaPoupanca from "./Conta/ContaPoupanca.js";
import ContaSalario from "./Conta/ContaSalario.js";

const cliente = new Cliente("Teste", "12345678911");
const cliente2 = new Cliente("Teste2", "12345678910");

const contaCorrTeste = new ContaCorrente("001", cliente);
const contaPoupTeste = new ContaPoupanca("001", cliente, 50);
const contaSalaTeste = new ContaSalario("002", cliente, 0);

contaSalaTeste.depositar(100);
contaSalaTeste.sacar(50);

console.log(contaSalaTeste);
