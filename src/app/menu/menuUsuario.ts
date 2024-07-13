import registrarUsuario from "../usuario/registrarUsuario";
import TerminalUtil from "../util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";

export default async function menuUsuario() {
  TerminalUtil.titulo("Usuario");

  const [indice] = await TerminalUtil.menu(["1. Registrar Usuário", "Voltar"]);

  switch (indice) {
    case 0:
      await registrarUsuario();
      break;

    default:
      await menuPrincipal();
      return;
  }

  await menuUsuario();
}
