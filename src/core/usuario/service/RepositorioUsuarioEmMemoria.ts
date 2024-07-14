import Usuario from "../model/Usuario";

export default class RepositorioUsuarioEmMemoria {
  private static readonly items: Usuario[] = [];

  async inserir(usuario: Usuario) {
    const items = RepositorioUsuarioEmMemoria.items;
    const usuarioExistente = await this.buscarEmail(usuario.email);

    if (usuarioExistente) return;
    items.push(usuario);
  }

  async buscarEmail(email: string): Promise<Usuario | null> {
    const items = RepositorioUsuarioEmMemoria.items;
    return items.find((u) => u.email === email) ?? null;
  }
}
