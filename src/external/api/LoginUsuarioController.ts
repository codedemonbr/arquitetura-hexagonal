import LoginUsuario from "@/core/usuario/service/LoginUsuario";
import { Express } from "express";
import ProvedorJwt from "./ProvedorJwt";

export default class LoginUsuarioController {
  constructor(servidor: Express, casoDeUso: LoginUsuario) {
    servidor.post("/api/usuarios/login", async (req, resp) => {
      const obj = {
        email: req.body.email,
        senha: req.body.senha,
      };

      try {
        const usuario = await casoDeUso.executar(obj);

        const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!);

        resp.status(201).send({ token: provedorJwt.gerar(usuario) });
      } catch (erro: any) {
        resp.status(400).send(erro.message);
      }
    });
  }
}
