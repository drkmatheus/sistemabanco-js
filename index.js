import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Conta from "./Conta.js";

const cliente = new Cliente("Teste", "12345678911");
const cliente2 = new Cliente("Teste2", "12345678910");

const contaCorrTeste = new ContaCorrente("001", cliente);
const contaPoupTeste = new ContaPoupanca("001", cliente, 50);
const contaTeste = new Conta("002", cliente2, 0);

console.log(contaTeste);
