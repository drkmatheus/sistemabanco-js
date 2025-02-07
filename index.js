import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Conta from "./Conta.js";

const cliente = new Cliente("Teste", "12345678911");
const cliente2 = new Cliente("Teste2", "12345678910");

const contaCorrTeste = new ContaCorrente("001", cliente);
const contaCorrTeste2 = new Conta("002", cliente2);

contaCorrTeste.depositar(500);
contaCorrTeste.sacar(100);

const contaPoupTeste = new ContaPoupanca("001", cliente, 50);

//contaCorrTeste.transferir(valor, contaCorrTeste2);

console.log(contaCorrTeste);
console.log(contaPoupTeste);
