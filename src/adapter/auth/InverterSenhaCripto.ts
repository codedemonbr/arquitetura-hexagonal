import ProvedorCriptografia from "./ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um Adaptador!
// O adaptador NÃOOOO faz parte do core business da aplicação
export default class InverterSenhaCripto implements ProvedorCriptografia {
  criptografar(senha: string): string {
    return senha.split("").reverse().join("");
  }
}
