import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const cliente = new Cliente("Teste", "12345678911");
const cliente2 = new Cliente("Teste2", "12345678910");

const contaCorrTeste = new ContaCorrente("001", cliente);
const contaCorrTeste2 = new ContaCorrente("002", cliente2);

let valor = 200;

contaCorrTeste.transferir(valor, contaCorrTeste2);

console.log(contaCorrTeste);
