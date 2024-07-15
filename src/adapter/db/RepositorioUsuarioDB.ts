import Usuario from "../../core/usuario/model/Usuario";
import db from "./db";

export default class RepositorioUsuarioDB {
  async inserir(usuario: Usuario) {
    try {
      const sql = `insert into usuarios ( nome, email, senha) values ( ?, ?, ?)`;

      const values = [usuario.nome, usuario.email, usuario.senha];

      const [result, fields] = await (await db).execute(sql, values);
    } catch (error) {
      console.log(error);
    }
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const sql = `SELECT BIN_TO_UUID(id,1) as id, nome, email, senha FROM usuarios where email = ?`;
    const value = [email];

    const [result] = await (await db).execute(sql, value);

    if (Array.isArray(result) && result.length === 0) return null;
    return result[0];
  }
}
