import Funcionario from "./Funcionario.js";

class Gerente extends Funcionario {
  constructor(nomeCompleto, cpf, salario) {
    super(nomeCompleto, cpf, salario);
    this.bonus = 1.1;
  }
}

export default Gerente;
