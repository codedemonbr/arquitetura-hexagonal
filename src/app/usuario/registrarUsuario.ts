import Usuario from "@/core/usuario/model/Usuario";

import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário");

  const nome = await TerminalUtil.campoRequerido("Nome: ", "Ana Silva");
  const email = await TerminalUtil.campoRequerido("Email: ", "ana@email.com");
  const senha = await TerminalUtil.campoRequerido("Senha: ", "123456");

  const usuario: Usuario = { nome, email, senha };

  const provedorCripto = new InverterSenhaCripto();
  const casodeUso = new RegistrarUsuario(provedorCripto);

  await casodeUso.executar(usuario);

  TerminalUtil.sucesso("Usuário registrado com sucesso!");

  await TerminalUtil.esperarEnter();

  try {
    await casodeUso.executar(usuario);
  } catch (error: any) {
    TerminalUtil.erro(`Deu ruim: ${error.message}`);
  } finally {
    await TerminalUtil.esperarEnter();
  }
}
