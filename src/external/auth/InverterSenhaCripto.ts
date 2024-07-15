// Na arquitetura hexagonal esta classe é um Adaptador!

import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

// O adaptador NÃOOOO faz parte do core business da aplicação
export default class InverterSenhaCripto implements ProvedorCriptografia {
  comparar(senha: string, senhaCriptografa: string): boolean {
    return senhaCriptografa === this.criptografar(senha);
  }
  criptografar(senha: string): string {
    return senha.split("").reverse().join("");
  }
}
