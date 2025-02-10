import Cliente from "./Cliente.js";
import Gerente from "./Funcionarios/Gerente.js";
import Diretor from "./Funcionarios/Diretor.js";
import SistemaAtuenticacao from "./SistemaAtuenticacao.js";

const gerente1 = new Gerente("Teste1", 12345678900, 2200);
const diretor1 = new Diretor("Teste2", 12345678922, 20200);

diretor1.cadastraSenha(12345);

const estaLogado = SistemaAtuenticacao.login(diretor1, 12345);

console.log(estaLogado);
