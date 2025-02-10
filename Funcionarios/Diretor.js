import Funcionario from "./Funcionario.js";

class Diretor extends Funcionario {
  constructor(nomeCompleto, cpf, salario) {
    super(nomeCompleto, cpf, salario);
    this.bonus = 2;
  }
}

export default Diretor;
