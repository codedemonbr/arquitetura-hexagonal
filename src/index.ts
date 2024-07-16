import dotenv from "dotenv";

dotenv.config();

import express from "express";
import ObterProdutoPorId from "./core/produto/service/ObterProdutoPorId";
import LoginUsuario from "./core/usuario/service/LoginUsuario";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import LoginUsuarioController from "./external/api/LoginUsuarioController";
import ObterProdutoPorIdController from "./external/api/ObterProdutoPorIdController";
import RegistrarUsuarioController from "./external/api/RegistrarUsuarioController";
import UsuarioMiddleware from "./external/api/UsuarioMiddleware";
import SenhaCripto from "./external/auth/SenhaCripto";
import RepositorioUsuarioDB from "./external/db/RepositorioUsuarioDB";

const app = express();

const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(porta, () => {
  console.log(`🔥 Servidor executando na porta ${porta}`);
});

//-------------------------------------------- Rotas Abertas

const repositorioUsuario = new RepositorioUsuarioDB();
const provedorCripto = new SenhaCripto();
const registrarUsuario = new RegistrarUsuario(
  repositorioUsuario,
  provedorCripto
);

const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto);

new RegistrarUsuarioController(app, registrarUsuario);
new LoginUsuarioController(app, loginUsuario);

//-------------------------------------------- Rotas Protegidas
const usuarioMid = UsuarioMiddleware(repositorioUsuario);

const obterProdutoPorId = new ObterProdutoPorId();

new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid);
