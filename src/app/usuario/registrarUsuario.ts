import Usuario from "@/core/usuario/model/Usuario";

import SenhaCripto from "@/adapter/auth/SenhaCripto";

import RepositorioUsuarioDB from "@/adapter/db/RepositorioUsuarioDB";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário");

  const nome = await TerminalUtil.campoRequerido("Nome: ");
  const email = await TerminalUtil.campoRequerido("Email: ");
  const senha = await TerminalUtil.campoRequerido("Senha: ");

  const usuario: Usuario = { nome, email, senha };

  try {
    const repositorio = new RepositorioUsuarioDB();
    const provedorCripto = new SenhaCripto();
    const casodeUso = new RegistrarUsuario(repositorio, provedorCripto);

    await casodeUso.executar(usuario);
    TerminalUtil.sucesso("Usuário registrado com sucesso!");
  } catch (error: any) {
    TerminalUtil.erro(`Deu ruim: ${error.message}`);
  } finally {
    await TerminalUtil.esperarEnter();
  }
}
