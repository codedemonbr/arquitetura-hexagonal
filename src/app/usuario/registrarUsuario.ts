import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário");

  const id = await TerminalUtil.campoRequerido(
    "ID: ",
    "71a52577-c924-43d8-adaa-f698ed3f7d79"
  );
  const nome = await TerminalUtil.campoRequerido("Nome: ", "Ana Silva");
  const email = await TerminalUtil.campoRequerido("Email: ", "ana@email.com");
  const senha = await TerminalUtil.campoRequerido("Senha: ", "123456");

  const usuario: Usuario = { id, nome, email, senha };

  await new RegistrarUsuario().executar(usuario);

  TerminalUtil.sucesso("Usuário registrado com sucesso!");

  await TerminalUtil.esperarEnter();
}
