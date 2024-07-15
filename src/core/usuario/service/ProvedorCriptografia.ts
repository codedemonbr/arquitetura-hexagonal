//Na arquitetura hexagonal esta interface é uma PORTA!
//A porta faz parte do core da aplicação
export default interface ProvedorCriptografia {
  criptografar(texto: string): string;
  comparar(senha: string, senhaCriptografa: string): boolean;
}
